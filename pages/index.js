import Head from 'next/head'
import Layout from '../components/layout'
import ToDoList from '../components/todo-list'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack To-Do App</title>
        <meta name="description" content="A simple full-stack to-do application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 
        Layout is our shared wrapper (e.g. header, styling, etc.),
        and ToDoList is the component that fetches & displays the tasks.
      */}
      <Layout>
        <ToDoList />
      </Layout>
    </div>
  )
}
