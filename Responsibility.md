# Advanced-Backend

    - The Responsibility of a Beginner Backend Developer
        - Understand request object [Request from browser should understand properly]
        - Understand Routing [request can be send by users from different routes for different purpose, we have to understand the difference between the routes]
        - Understand how to generate response [after getting request we have to generate response as per users requirement]
        - Understand the middleware [we can set some validation or check some authentication system for the request before respond it back. this can be more helpful for checking if the request is valid for our server]
        - Understand how to deal with the external resources [we have to use some external resources like email server, file server or database. sometimes we need to send a email to users with some resources as per response, this external resources will help us to do that for a request, and the database will store the information for further use ]
        - Understand how to write the business logic [This is the main point to understand and works with]
            - where and when to create a route
            - Impleament REST API best practice
            - How to design a REST API
            - How to Sequre API endpoinds
            - How to deal with third party resources like DB, Mail, file server
            - How to understand the business logic and intregreat it properly
            - DSA



    - The main way to handle req and res is REST API

    - Main components of Backend application
        - Handle HTTP request [mostly done by a framework] 
            - client -> http -> server
        - Handle routing [mostly done by a framework]
        - Handle security [mostly done by a framework and language]
        - Write business logic [Done by the programming language]
        - Access Operating System [Done by the programming language]
        - Access the database [Done by DB or ORM]
        - Access third party service [Syncronus - HTTP, Asynconrus - message queue]
    - Api Development checklist
        - Scaffold a project
        - Create a route
        - Create a controller for this route
            - Extract data from request object
            - Validate and sanitize incoming data
            - Permission and Authentication
            - Write Business logic separatly
                - Main Business Logic
                - Database Connection [Persist/ Fetch data]
                - Utilities
            - Handle Possible Error
            - Synchronus / Asynchronus communication with third party service 
            - Send a response
        - Create and connect necessery middleware [Global / local]
