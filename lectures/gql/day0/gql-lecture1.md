# Week 4 Lecture - C136 GQL Day0

Learnign goals => Today we touch on Token Based Authentication and React Context. We will spend the majority of our day in code reviews from the assessment, practicing authentication using JWT's, and fillin in any knowledge gaps from the past weeks. The rest of the week will focus on GraphQl & Apollo.

## Agenda

    1) Auth Basics
    2) JSON Web Tokens (Jot)
    3) React Context API
    4) Redirects
    5) Hash & Salt

### 1. Auth Basics

Authentication is the process of allowing a user of your application to create an account, sign in, have specific user permissions, get data that only concerns them as a user, etc. Authentication includes a **security** concern (we don't want people to be able to see or manipulate each other's data) as well as a **usability** concern (a todo app that doesn't let me have my own todo list is pretty pointless, unless I'm the only user of the application).

There are three main different authentication types you really need to concern yourself with - 1) Session/cookie-based auth, 2) Token-based auth, and 3) OAuth. We will be focusing mainly on token-based authentication for now. I I will be skipping over session-based authentication for now because it is generally considered to be inferior to token-based authentication these days. That being said, it is still worth researching on your own because there are TONS of applications that are still using session-based auth, so as a programmer in the field, you may find yourself in a position to need to deal with it.

#### **Understanding Token-based Auth**

Token-authentication is conceptually pretty easy to understand. A user fills in a login form containing, typically, a username and password which is then sent to the server for checking. The server looks up a user with the given username in the database and checks if the password is correct. If not, it returns an authentication error telling the person they put in the wrong username and/or password.

Otherwise, if everything checks out, the server creates a **token**, which is just a long string of seemingly-random text that gets sent back to the user. This token is like an access card to a building - that user now has a certain level of privilege to move about the app accessing certain data, making changes to the data, accessing certain parts of the website, etc. Oftentimes we save this token in sessionStorage or localStorage for easy access by the client app.

Every single time the client app makes an HTTP request to the server, it sends that token along with it. And with every protected resource on the server (any API endpoint that requires special access rights, like that of a logged-in user), the server checks the token that it received from the client to make sure this user is authorized to access this content. If so, it returns the requested content. Otherwise it sends some kind of authorization error indicating that the user isn't authorized to see that information.

In order to log a user out, you simply need to remove the token from wherever you saved it (session or local storage) and it stops being sent with every request, meaning the server stops giving the user access to the protected data. This is akin to taking away the access card from the employee of a building until they come in the next time and prove again they're allowed to be there.

Here are some great resources for better understanding how token-based authentication works, and specifically how JSON Web Tokens (a.k.a JWTs, pronounced "jots") work.

* [The Ins and Outs of Token-based auth](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication)

* [Getting to know JSON Web Tokens](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token)

* [Tutorial on authenticating a Node.js app with JWTs](https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens)

### 2. JSON Web Tokens

JWTs are constructed from three different elements: the header, the payload, and the signature/encryption data. The first two elements are JSON objects of a certain structure. The third is dependent on the algorithm used for signing or encryption, and, in the case of unencrypted JWTs it is omitted. These three elements are separated by dots (“.”).

The resulting sequence is a printable string like the following (newlines inserted for readability):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

Notice the dots separating the three elements of the JWT (in order: the header, the payload, and
the signature).

In this example the decoded header is:

```json
{
"alg": "HS256",
"typ": "JWT"
}
```

The decoded payload is:

```json
{
"sub": "1234567890",
"name": "John Doe",
"admin": true
}
```

And the secret required for verifying the signature is ```secret```.

[JWT.io](JWT.io) is an interactive playground for learning more about JWTs. Copy the token
from above and see what happens when you edit it.

#### **The Header**

Every JWT carries a header (also known as the JOSE header) with claims about itself. These claims establish the algorithms used, whether the JWT is signed or encrypted, and in general, how to parse the rest of the JWT. According to the type of JWT in question, more fields may be mandatory in the header. For instance, encrypted JWTs carry information about the cryptographic algorithms used for key encryption and content encryption. These fields are not present for unencrypted JWTs. The only mandatory claim for an unencrypted JWT header is the alg claim:

    alg: the main algorithm in use for signing and/or decrypting this JWT.

For unencrypted JWTs this claim must be set to the value none.

Optional header claims include the typ and cty claims:

    typ: the media type5 of the JWT itself. This parameter is only meant to be used as a help for uses where JWTs may be mixed with other objects carrying a JOSE header. In practice, this rarely happens. When present, this claim should be set to the value JWT.

    cty: the content type. Most JWTs carry specific claims plus arbitrary data as part of their payload. For this case, the content type claim must not be set. For instances where the payload is a JWT itself (a nested JWT), this claim must be present and carry the value JWT.This tells the implementation that further processing of the nested JWT is required. Nested JWTs are rare, so the cty claim is rarely present in headers.

#### The Payload

```json
{
"sub": "1234567890",
"name": "John Doe",
"admin": true
}
```

The payload is the element where all the interesting user data is usually added. In addition, certain claims defined in the spec may also be present. Just like the header, the payload is a JSON object. No claims are mandatory, although specific claims have a definite meaning. The JWT spec specifies that claims that are not understood by an implementation should be ignored. The claims with specific meanings attached to them are known as **registered claims**. There are also public and private claims.

#### **The Signature**

_***see slides directory => jwt handbook**_

### 3. Context

[React Context](https://reactjs.org/docs/context.html) provides a way to pass data through the component tree without having to pass props down manually at every level.

    In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

**If you only want to avoid passing some props through many levels, [component composition](https://reactjs.org/docs/composition-vs-inheritance.html) is often a simpler solution than context.**

### 4. Redirects

[https://reactrouter.com/web/example/auth-workflow](https://reactrouter.com/web/example/auth-workflow)

### 5. Hash & Salt

The gist of authentication is to provide users with a set of credentials, such as username and password, and to verify that they provide the correct credentials whenever they want access to the application. Hence, we need a way to store these credentials in our database for future comparisons. However, storing passwords on the server side for authentication is a difficult task.

A strong password storage strategy is critical to mitigating data breaches that put the reputation of any organization in danger. Hashing is the foundation of secure password storage.

    Hashing is a cryptographic process that can be used to validate the authenticity and integrity of various types of input. It is widely used in authentication systems to avoid storing plaintext passwords in databases, but is also used to validate files, documents and other types of data

#### **Storing Passwords is Risky and Complex**

A simple approach to storing passwords is to create a table in our database that maps a username with a password. When a user logs in, the server gets a request for authentication with a payload that contains a username and a password. We look up the username in the table and compare the password provided with the password stored. A match gives the user access to the application.

The security strength and resilience of this model depends on how the password is stored. The most basic, but also the least secure, password storage format is cleartext.

As explained by Dan Cornell from the Denim Group, cleartext refers to "readable data transmitted or stored in the clear", for example, unencrypted. You may have also seen the terms plaintext and plain text. What's the difference? According to Cornell, plaintext refers to data that will serve as the input to a cryptographic algorithm, while plain text refers to unformatted text, such as the content of a plain text file or .txt.

In cryptography, a hash function is a mathematical algorithm that maps data of any size to a bit string of a fixed size. We can refer to the function input as message or simply as input. The fixed-size string function output is known as the hash or the message digest. As stated by OWASP, hash functions used in cryptography have the following key properties:

* It's easy and practical to compute the hash, but "difficult or impossible to re-generate the original input if only the hash value is known."

* It's difficult to create an initial input that would match a specific desired output.

Thus, _**in contrast to encryption, hashing is a one-way mechanism**_. The data that is hashed cannot be practically "unhashed".

    Commonly used hashing algorithms include Message Digest (MDx) algorithms, such as MD5, and Secure Hash Algorithms (SHA), such as SHA-1 and the SHA-2 family that includes the widely used SHA-256 algorithm.

    In bitcoin, integrity and block-chaining use the SHA-256 algorithm as the underlying cryptographic hash function.

#### **Cryptographic Hash Functions are Practically Irreversible**

Hash functions behave as **one-way functions** by using mathematical operations that are extremely difficult and cumbersome to revert such as the modulo operator.

#### **A Small Change Has a Big Impact**

Another virtue of a secure hash function is that its output is not easy to predict.The hash for ```dontpwnme4``` would be very different than the hash of ```dontpwnme5```, even though only the last character in the string changed and both strings would be adjacent in an alphabetically sorted list.

This property is known as the **avalanche effect** and it has the desirable effect that if an input is changed slightly, the output is changed significantly.

Consequentially, there is no feasible way for us to determine what the hash of dontpwnme6 would be based on the two previous hashes; the output is non-sequential.

#### **Using Cryptographic Hashing for More Secure Password Storage**

The irreversible mathematical properties of hashing make it a phenomenal mechanism to conceal passwords at rest and in motion. Another critical property that makes hash functions suitable for password storage is that they are deterministic.

    A deterministic function is a function that given the same input always produces the same output. 

This is vital for authentication since we need to have the guarantee that a given password will always produce the same hash; otherwise, it would be impossible to consistently verify user credentials with this technique.

To integrate hashing in the password storage workflow, when the user is created, instead of storing the password in cleartext, we hash the password and store the username and hash pair in the database table. When the user logs in, we hash the password sent and compare it to the hash connected with the provided username. If the hashed password and the stored hash match, we have a valid login. It's important to note that we never store the cleartext password in the process, we hash it and then forget it.

Whereas the transmission of the password should be encrypted, the password hash doesn't need to be encrypted at rest. When properly implemented, password hashing is cryptographically secure. This implementation would involve the use of a salt to overcome the limitations of hash functions.

    Uniqueness is the key property for salts; length happens to help uniqueness.

#### **Limitations**

Brute force?

Rainbow tables?

To mitigate attacks by boosting hashing with a procedure that adds unique random data to each input at the moment they are stored. This practice is known as adding salt to a hash and it produces salted password hashes.

With a salt, the hash is not based on the value of the password alone. The input is made up of the password plus the salt. A rainbow table is built for a set of unsalted hashes. If each pre-image includes a unique, unguessable value, the rainbow table is useless. When the attacker gets a hold of the salt, the rainbow table now needs to be re-computed, which ideally would take a very long time, further mitigating this attack vector.

    "The trick is to ensure the effort to “break” the hashing exceeds the value that the perpetrators will gain by doing so. None of this is about being “unhackable”; it’s about making the difficulty of doing so not worth the effort." - Troy Hunt

#### **No Need for Speed**

According to Jeff Atwood, "hashes, when used for security, need to be slow." A cryptographic hash function used for password hashing needs to be slow to compute because a rapidly computed algorithm could make brute-force attacks more feasible, especially with the rapidly evolving power of modern hardware. We can achieve this by making the hash calculation slow by using a lot of internal iterations or by making the calculation memory intensive.

A slow cryptographic hash function hampers that process but doesn't bring it to a halt since the speed of the hash computation affects both well-intended and malicious users. It's important to achieve a good balance of speed and usability for hashing functions. A well-intended user won't have a noticeable performance impact when trying a single valid login.

#### **Collision Attacks Deprecate Hash Functions**

Since hash functions can take an input of any size but produce hashes that are fixed-size strings, the set of all possible inputs is infinite while the set of all possible outputs is finite. This makes it possible for multiple inputs to map to the same hash. Therefore, even if we were able to reverse a hash, we would not know for sure that the result was the selected input. This is known as a collision and it's not a desirable effect.

A cryptographic collision occurs when two unique inputs produce the same hash. Consequently, a collision attack is an attempt to find two pre-images that produce the same hash. The attacker could use this collision to fool systems that rely on hashed values by forging a valid hash using incorrect or malicious data. Therefore, cryptographic hash functions must also be resistant to a collision attack by making it very difficult for attackers to find these unique values.

    Since inputs can be of infinite length but hashes are of a fixed length, collisions are possible. Despite a collision risk being statistically very low, collisions have been found in commonly used hash functions.

For simple hashing algorithms, a simple Google search will allow us to find tools that convert a hash back to its cleartext input. The MD5 algorithm is considered harmful today and Google announced the first SHA1 collision in 2017. Both hashing algorithms have been deemed unsafe to use and deprecated by Google due to the occurrence of cryptographic collisions.

Google recommends using stronger hashing algorithms such as SHA-256 and SHA-3. Other options commonly used in practice are ```bcrypt```, ```scrypt```.

[node.bcrypt.js: A library to help you hash passwords.](https://www.npmjs.com/package/bcrypt)
