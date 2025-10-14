import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"

const useGetMessages = () => {
  const [ loading, setLoading ] = useState()

  const {messages, setMessages, selectedConversations} = useConversation()


  useEffect(() => {
    const getMessages = async () =>{
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/${selectedConversations._id}`);
            const data = await res.json();
            if(data.error) throw new Error(data.error)
            setMessages(data)
        } catch (error) {
            toast.error(error.messages)
        }finally{   
            setLoading(false)
        }

    }


    if(selectedConversations?._id) getMessages()

  }, [selectedConversations?._id, setMessages])

  return {messages, loading}
}

export default useGetMessages