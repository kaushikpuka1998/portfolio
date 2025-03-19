import React from "react";
import "./style.css";
import {
    FaGithub,
    FaTwitter,
    FaFacebookF,
    FaLinkedin, FaMedium,
    FaYoutube
} from "react-icons/fa";
import FaLeetcode from '../FaLeetCode/FaLeetcode';
import FaCodechef from "../FaCodechef/FaCodechef";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofils.youtube && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.youtube} title="Youtube" >
              <FaYoutube/>
            </a>
          </li>
        )}
        {socialprofils.twitter && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.twitter} title="Twitter">
              <FaTwitter/>
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.github} title="Github">
              <FaGithub/>
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.facebook} title="Github">
              <FaFacebookF/>
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.linkedin} title="LinkedIn">
              <FaLinkedin/>
            </a>
          </li>
        )}
          {socialprofils.medium && (
              <li>
                  <a target="_blank" rel="noopener noreferrer" href={socialprofils.medium} title="Medium">
                      <FaMedium/>
                  </a>
              </li>
          )}
        {socialprofils.leetcode && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.leetcode} title="Leetcode">
              <FaLeetcode/>
            </a>
          </li>
        )}

        {socialprofils.codechef && (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={socialprofils.codechef} title="Codechef">
              <FaCodechef/>
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
