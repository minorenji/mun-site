import React from "react";
import Instagram from "../assets/instagram-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Email from "../assets/envelope.svg"
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Email"
        href={`mailto:${config.email_address}`}
        target="_blank"
        rel="noopener"
      >
        <Email width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
