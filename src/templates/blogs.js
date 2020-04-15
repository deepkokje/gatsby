import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import Head from '../components/head'


 export const data =  graphql`
query($slug: String!){
contentfulBlogPost(slug:{eq:$slug}){
  title
  publishedDate(formatString:"MMMM Do, YYYY")
  body{
    json
  }
}
}`
const Blog=(props)=>{
    return(
        <Layout>
          <Head title ={props.data.contentfulBlogPost.title}/>
        <h1>
          {props.data.contentfulBlogPost.title}
        </h1>
        <p>
        {props.data.contentfulBlogPost.publishedDate}
        </p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json)}

        </Layout>
    )
}

export default Blog