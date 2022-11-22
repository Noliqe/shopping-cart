import GitHubLogo from "./Icons/GitHub-Mark-32px.png"

const Footer = (props) => {
    return (
        <div className="footer">
        <p>Copyright © 2022 Noliqe</p>
        <a href="https://github.com/Noliqe">
        <img src={GitHubLogo} alt="octo"></img>
        </a>
      </div>
    );
  };
  
  export default Footer;