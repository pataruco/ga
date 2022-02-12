# Slack bot lab 🤖 🧪

## Installing and Configuring Everything

In order to get our bots up and running, we need to perform a number of installations, so make sure you follow these steps carefully.

Your instructor should provide you with a Hubot and an API token; be sure to have those ready because you'll need both in order to complete many of these steps.

1. First, you'll need to [sign up for a free Heroku account](http://heroku.com).

2. Next, [download and install the Heroku toolbelt](https://toolbelt.heroku.com/). This set of tools allows us to talk to Heroku's servers using the command line.

3. Clone the Jocasta, a Slack bot boilerplate I made for this course

   ```sh
   git clone --single-branch --branch starter-code git@github.com:pataruco/jocasta.git
   ```

4. Install dependencies

   ```sh
   yarn
   ```

5. Login in Heroku

   ```sh
   heroku login
   ```

   then enter the email and password you used when setting up your Heroku account.

   You should see a confirmation that you are logged in, showing your email address.

6. Create a new app on Heroku

   ```sh
   heroku create myhubotapp
   ```

   where `myhubotapp` is a unique app name; any app name already used by a heroku user will fail with

   ```sh
   "Name is already taken."
   ```

   If this happens, just repeat the command with a different app name. (The more unusual the name, the more likely it is to be unique.)

7. Set environment variables in Heroku

   ```sh
   heroku config:add HEROKU_URL=https://myhubotapp.herokuapp.com
   ```

   where `myhubotapp` is the app name you created and used in the previous step

   ```sh
   heroku config:add HUBOT_SLACK_TOKEN=YourTokenGoesHere
   ```

   where `YourTokenGoesHere` is the API token provided by the instructor

8. Push all your code up to Heroku

   ```sh
   git checkout -b master
   git push heroku master
   ```

   Assuming you do not receive an error, proceed to the next step.

9. Test your bot locally to make sure it's working:

   ```sh
   ./bin/hubot
   ```

   You'll receive a number of messages, including some warnings, which should not be a problem. When the messages stop, press <kbd>Enter</kbd> .

   You should have a Node prompt displaying your bot name.

   Press <kbd>control</kbd> + <kbd>C</kbd> when you're done, to return to the BASH prompt.

10. Copy the script.js file from your start files:

    In Finder, open the start files for today.

    In the `hubot-code` folder, copy the `script.js` file.

    Navigate to the `JSD/myhubot/scripts` folder, then paste the file you copied.

    You should do all your development work in this `scripts.js` file.
