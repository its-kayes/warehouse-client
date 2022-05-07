import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='blogs-responsive grid grid-cols-2 gap-8 text-2xl'>
                <p className='bg-slate-300 rounded-3xl p-10 m-8'>
                    <p className='font-semibold'>
                        Difference Between Javascript and Nodejs ?
                    </p>
                    <p className='mt-5 '>
                        JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                        JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine.
                    </p>
                </p>
                <p className='bg-slate-300 rounded-3xl p-10 m-8'>
                    <p className='font-semibold'>
                        When Should I use Nodejs and When Should I do use Mongodb
                    </p>
                    <p className='mt-5'>
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. On the other hand MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

                        For Backend code we can use Node.js and for storage data use can use Mongodb. To connect a database with a website we generally use Node.js.
                    </p>
                </p>
                <p className='bg-slate-300 rounded-3xl p-10 m-8'>
                    <p className='font-semibold'>
                        Difference between sql and nosql .
                    </p>
                    <p className='mt-5'>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.

                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                    </p>
                </p>
                <p className='bg-slate-300 rounded-3xl p-10 m-8'>
                    <p className='font-semibold'>
                        What is the purpose of jwt and how it work
                    </p>
                    <p className='mt-5 '>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                        JWT are mainly used for authentication. After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access
                    </p>
                </p>
            </div>
        </div>
    );
};

export default Blogs;