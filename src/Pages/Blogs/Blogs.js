import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container' id='blogs'>
            <h3 className='text-center my-4'>Welcome to Stowage BLOGS</h3>
            <article>
                <h5 className='text-primary'>1. Difference between javascript and nodejs</h5>
                <p><span className='text-success'>JavaScript:</span> Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</p>
                <p><span className='text-success'>Node JS</span> It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</p>
            </article>
            <article>
                <h5 className='text-primary'>2. When should you use nodejs and when should you use mongodb</h5>
                <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                <p>MongoDB — the most popular NoSQL system, especially among startups. A document-oriented database with JSON-like documents in dynamic schemas.</p>
                <p>Benefits of NoSQL</p>
                <ul>
                    <li>highly and easily scalable</li>
                    <li>Maintaining NoSQL Servers is Less Expensive</li>
                    <li>Lesser Server Cost and Open-Source</li>
                    <li>No Schema or Fixed Data model. etc</li>
                </ul>
            </article>
            <article>
                <h5 className='text-primary'>3 Differences between sql and nosql databases.</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>SQL</th>
                            <th>NOSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Definition</td>
                            <td>SQL databases are primarily called RDBMS or Relational Databases</td>
                            <td>NoSQL databases are primarily called as Non-relational or distributed database</td>
                        </tr>
                        <tr>
                            <td>Design for</td>
                            <td>Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</td>
                            <td>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</td>
                        </tr>
                        <tr>
                            <td>Query Language</td>
                            <td>Structured query language (SQL)</td>
                            <td>No declarative query language</td>
                        </tr>
                    </tbody>
                </Table>
            </article>
            <article>
                <h5 className='text-primary'>4. What is the purpose of jwt and how does it work</h5>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </article>
        </div>
    );
};

export default Blogs;