interface Props{
    text: string
}

function WelcomeText({text} : Props){
  return(
        <h1 className="welcome_msg">{text ? text : "Hey"}
            </h1>
  );

}

export default WelcomeText