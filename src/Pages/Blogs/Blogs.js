import React from "react";

const Blogs = () => {
  return (
    <div className="md:px-24 px-2 md:pt-16 pt-8 pb-16">
      <div className="card w-full bg-base-100 shadow-md mb-10">
        <div className="card-body">
          <h2 className="card-title text-lime-500 mb-3">
            Question: What is the difference between javascript and NodeJS?
          </h2>
          Answer:
          <p>
            <div className="">
              <table className="table-normal w-full	 ">
                <thead>
                  <tr>
                    <th></th>
                    <th>Javascript </th>
                    <th>NodeJS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      Javascript is a programming language that <br></br>is used
                      for writing scripts on the website.
                    </td>
                    <td>NodeJS is a Javascript runtime environment.</td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Javascript can only be run in the browsers.</td>
                    <td>
                      We can run Javascript outside the browser<br></br> with
                      the help of NodeJS.
                    </td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>It is basically used on the client-side.</td>
                    <td>It is mostly used on the server-side.</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>
                      Javascript is capable enough to add HTML and play with the
                      DOM.
                    </td>
                    <td>Nodejs does not have capability to add HTML tags.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-md mb-10">
        <div className="card-body">
          <h2 className="card-title text-lime-500 mb-3">
            Question: What is JWT, and how does it work?
          </h2>
          Answer:
          <p>
            For beginning developers, JSON stands for JavaScript Object Notation
            and is a text-based format for transmitting data across web
            applications. It stores information in an easy-to-access manner,
            both for developers and computers. It can be used as a data format
            by any programming language and is quickly becoming the preferred
            syntax for APIs, surpassing XML.
          </p>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: The header and the
            payload. The signature. The JOSE (JSON Object Signing and
            Encryption) header contains the type of token — JWT in this case —
            and the signing algorithm. The payload contains the claims. This is
            displayed as a JSON string, usually containing no more than a dozen
            fields to keep the JWT compact. This information is typically used
            by the server to verify that the user has permission to perform the
            action they are requesting. There are no mandatory claims for a JWT,
            but overlaying standards may make claims mandatory. For example,
            when using JWT as bearer access token under OAuth2.0, iss, sub, aud,
            and exp must be present. some are more common than others. The
            signature ensures that the token hasn’t been altered. The party that
            creates the JWT signs the header and payload with a secret that is
            known to both the issuer and receiver, or with a private key known
            only to the sender. When the token is used, the receiving party
            verifies that the header and payload match the signature.{" "}
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-md mb-10">
        <div className="card-body">
          <h2 className="card-title text-lime-500 mb-3">
            Question: Difference between SQL and NoSQL ?
          </h2>
          Answer:
          <p>
            <div className="">
              <table className="table-normal w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>SQL </th>
                    <th>NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
                    <td>Non-relational or distributed database system.</td>
                  </tr>

                  <tr className="hover">
                    <th>2</th>
                    <td>
                      These databases have fixed or static or predefined schema{" "}
                    </td>
                    <td>They have dynamic schema</td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>
                      These databases are not suited for hierarchical data
                      storage.{" "}
                    </td>
                    <td>
                      These databases are best suited for hierarchical data
                      storage.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-md mb-10">
        <div className="card-body">
          <h2 className="card-title text-lime-500 mb-3">
            Question: How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            Answer: NodeJS receives multiple client requests and places them
            into EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
