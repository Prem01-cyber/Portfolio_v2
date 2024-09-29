// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  // Sort the commands only once and store them in a variable
  const commands = Object.keys(bin).sort();

  // Initialize the formatted commands string
  let formattedCommands = '';

  // Define the number of commands per row for alignment
  const commandsPerRow = 5;

  // Loop through the commands and format them into columns
  commands.forEach((command, index) => {
    // Add a tab at the start of each row to ensure alignment
    if (index % commandsPerRow === 0) {
      formattedCommands += '\n    '; // Add newline and indent at the start of each row
    }

    // Add each command, followed by padding to align the columns
    formattedCommands += command.padEnd(15); // Adjust padding width as needed
  });

  // Return the help text with a man-page-like structure and proper tab alignment
  return `NAME
    help - displays a list of available commands and usage information

DESCRIPTION
    The following commands are available:
    
    ${formattedCommands}

    Use [tab] for autocompletion of commands.

OPTIONS
    [tab]          Trigger completion.
    [ctrl+l]       Clear terminal screen.

EXAMPLES
    Type 'sumfetch' to display Prem's summary.

SEE ALSO
    help, sumfetch
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return `You said: "${args.join(' ')}", but did you *really* mean it? 🤔`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return `Well, according to my calculations... You're ${config.ps1_username}. But who's asking?`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Here's some random nonsense I found lying around:\n- memes\n- useless_data.txt\n- your_sanity\n- README.txt (but will you read it? Probably not.)`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `I'm like a minimalist artist – I have no directories. But if you want to donate to the cause, type 'donate' and let's talk $$$.`;
};

export const date = async (args: string[]): Promise<string> => {
  return `Today's date is ${new Date().toString()}, but honestly, time is an illusion anyway.`;
};

export const vi = async (args: string[]): Promise<string> => {
  return `VI? Really? What’s next? Morse code? Try using 'vim' like a modern person.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'Vim'? It's like using a typewriter in the age of AI. How about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? Too cool for school, huh? Why not go retro with 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Emacs, huh? Well, you're just one step away from giving up and using VSCode, aren't you? 😏`;
};

export const pwd = async (args?: string[]): Promise<string> => {
  return `You're currently in /a_place_called_life. Don't worry, we're all lost here.`;
};

export const rm = async (args?: string[]): Promise<string> => {
  return `Whoa there! Trying to delete stuff, huh? Be careful, I might 'rm' myself out of existence!`;
};

export const man = async (args?: string[]): Promise<string> => {
  return `Looking for a 'man'? Here’s a pro tip: Nobody ever reads the manual, just wing it!`;
};

export const reboot = async (args?: string[]): Promise<string> => {
  return `Rebooting... Just kidding. I’m too lazy for that. You can reboot your own life choices.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Ah, 'sudo'. The magic word that makes you feel powerful, until you realize you still don’t know what you’re doing. `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██████╗ ██████╗ ███████╗███╗   ███╗         ██╗ █████╗ ███╗   ███╗██████╗ ██╗   ██╗██████╗  █████╗ ███╗   ███╗
  ██╔══██╗██╔══██╗██╔════╝████╗ ████║         ██║██╔══██╗████╗ ████║██╔══██╗██║   ██║██╔══██╗██╔══██╗████╗ ████║
  ██████╔╝██████╔╝█████╗  ██╔████╔██║         ██║███████║██╔████╔██║██████╔╝██║   ██║██████╔╝███████║██╔████╔██║
  ██╔═══╝ ██╔══██╗██╔══╝  ██║╚██╔╝██║    ██   ██║██╔══██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║
  ██║     ██║  ██║███████╗██║ ╚═╝ ██║    ╚█████╔╝██║  ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║
  ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝     ╚════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
                                                                                        
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
