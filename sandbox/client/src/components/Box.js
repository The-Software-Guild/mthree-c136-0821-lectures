
// you 99% should be naming your component files the same
// as the file name
function Box(props) {
     console.log(props)
     return (
          <div>
               {props.number}hello world again from {props.name.text}
          </div>
     )
}

// require / module.exports
// import / export => es6 syntacial

export default Box;