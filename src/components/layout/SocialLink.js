const SocialLink = ({ linkTitle, icon, href }) => {
  return (
    <li>
      <a href={href} title={linkTitle}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
