# Slack bot lab 🤖 🧪

## Testing your bot

### Testing your bot locally on your computer

You can test the code for your bot locally on your computer, without pushing to Heroku:

1. At the command line, navigate to the main folder for your bot.
2. Type

   ```sh
   ./bin/hubot
   ```

   Press <kbd>Enter</kbd>, this gives a few warning messages that you can safely ignore, as long as the BASH prompt is not displayed again after them.

   Press <kbd>Enter</kbd>, after which you should see a prompt such as`hubot>` that lets you interact with your bot.

3. For macOS users, to change your bot's name go to `bin > hubot` and update the line with your chosen bot name:

   ```sh
     exec node_modules/.bin/hubot --name "YOUR-BOT-NAME" "$@"
   ```

4. For WINDOWS, head to `bin > hubot.cmd` and change the line with your chosen bot name:

   ```cmd
   node_modules\.bin\hubot.cmd --name "YOUR-BOT-NAME" %*
   ```

5. Press <kbd>control</kbd> + <kbd>C</kbd> when you're done, to return to the BASH prompt.

### Testing your bot on the Heroku server

You can push your code to Heroku, then test using the code on the Heroku server:

1. At the command line, navigate to the main folder for your bot.
2. Add your changes to the stage with
   ```sh
   git add .
   ```
3. Commit your changes with
   ```sh
   git commit -m 'description of changes'
   ```
4. Push your changes to Heroku with
   ```sh
   git push heroku master
   ```
   Heroku runs tasks to build out the files necessary for your bot to run, and gives output for each step of the process.

### Testing your bot on Slack

Once you've pushed your code to Heroku, you can test your bot in the class Slack organization:

1. At the command line, navigate to the main folder for your bot.

2. Type `HUBOT_SLACK_TOKEN=TOKEN-GOES-HERE ./bin/hubot --adapter slack` where `TOKEN-GOES-HERE` is the Slack token provided by your instructor.
   This gives output, then gives you a prompt such as `hubot>` that lets you interact with your hubot.
3. Press `control` + `C` when you're done, to return to the BASH prompt.

4. In the class Slack workspace, open a direct message with the bot you're using (grab your bot's name from the the Slack App Directory [https://ga-ldn-js.slack.com/apps/A0F7XDU93-hubot?next_id=0](https://ga-ldn-js.slack.com/apps/A0F7XDU93-hubot?next_id=0)).
5. Send a direct message to interact with your bot.
