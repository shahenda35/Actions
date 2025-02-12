/**
 * The function `Optimistic` in this code snippet demonstrates the use of optimistic UI updates in
 * React by adding messages with a sending status before the actual message is delivered.
 * @returns The `Optimistic` component is being returned, which renders the `Thread` component. The
 * `Thread` component displays a list of messages with an optimistic UI approach using the
 * `useOptimistic` hook. It also includes a form for sending new messages.
 */
import { useOptimistic, useRef, useState } from "react";
import PropTypes from 'prop-types';


Thread.propTypes = {
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired
};
function Thread ({messages ,  sendMessage}) { 
    const formRef = useRef();
    async function formAction(formData) {
        addOptimisticMessage(formData.get("message"));
        formRef.current.reset();
        await sendMessage(formData);
    }

    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
          ...state,
          {
            text: newMessage,
            sending: true
          }
        ]
      );


    return (
        <>
            <h2>useOptimistic Example</h2>
            {optimisticMessages.map((message, index) => (
                <div key={index}>
                    {message.text}
                    {!message.text && <small style={{ color: "red" }}>Name is required</small>}
                    {!!message.sending && message.text && <small> (Sending...)</small>}
                </div>
            ))}
            <form action={formAction} ref={formRef}>
                <input type="text" name="message" />
                <button type="submit">Send</button>
            </form>

        </>
    )
}

async function deliverMessage (message) {
    await new Promise((res) => setTimeout(res , 1000));
    return message

}

export default function Optimistic() {
    const [messages , setMessages] = useState([]);

    async function sendMessage(formData) {
        const sentMessage = await deliverMessage(formData.get("message"));
        setMessages((messages) => [
            ...messages,
            { text: sentMessage }
        ])
    }

    return <Thread messages={messages} sendMessage={sendMessage} />

}