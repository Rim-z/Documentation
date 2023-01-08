
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n"|| text === "exit\n" ) {
    quit();
  }
  
  else if(text.slice(0, 5) === 'hello'){
    hello(text);}

 
    else if(text.match("help")) {
      help()
    }
    else if(text === 'list\n') {
      list()
    }
    
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(value){

  newValue = value.replace( /  /g , "")
  console.log(newValue.trim() + "!")
}


// help show commands to use
function help(){
  console.log("lists of commands available: \n hello \n help \n unknown command \n exit \n quit \n node tasks.js \n Hello X")
}

function list(){
  let tasks = ['Go to work', 'wow', 'hard work']
  let tasksList = tasks.map(item => `${item}\n`).join('')
    console.log(tasksList)
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Rim zeayter")
