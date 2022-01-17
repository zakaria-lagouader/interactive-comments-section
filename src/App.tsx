import React from 'react'
import { useQuery } from 'react-query'
import { getComments } from './api'
import Comments from './components/Comments';

const Loading = () => (<p className="text-3xl font-bold text-dark-blue">Loading ...</p>);

function App() {
  const { data, isLoading } = useQuery("getcomments", getComments, {
    refetchOnWindowFocus: false, //refetch when window comes to focus
    refetchOnReconnect: false, //refetch when browser reconnects to server
    refetchOnMount: false //refetch when component mounts
  })

  return (
    <div className="font-rubik px-4 w-full min-h-screen py-8 flex items-center justify-center bg-very-light-gray">
      {isLoading ? <Loading /> : data && <Comments comments={data.data} />}
    </div>
  )
}

export default App
