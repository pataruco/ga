# Slack bot lab 🤖 🧪

## Creating code for your Slack bot

Now we have our very own Hubot that's willing and able to do our bidding. What can it do? Let’s take it for a test drive.

There's a `module` object. We customize the `exports` method, and within it we create nested behaviors for different methods. So the code is always structured as

```js
module.exports = (robot) => {
  robot.verb(parameter1, (res) => {
    return res.command();
  });
};
```

where `verb` is the action from the API that you are customizing, `parameter1` is the data passed to the method, and `command` is a command from the API to run.

### Interacting with Your Hubot

To create instructions for your Hubot, you need to add a JavaScript file to the `scripts` folder. You can add multiple scripts files to that folder and all will execute when the Hubot is run. Let's look at a few commands that will help us build our Hubot scripts.

To test locally, type:

```sh
./bin/hubot
```

After a few warnings are displayed, press <kbd>Enter</kbd>. A prompt that includes the name of your bot is displayed, and everything you type is input for your bot to respond to. At this point you don't have any scripts in place for bot functionality, though.

#### Listening

**`.hear`**

The `.hear` command listens for a specific phrase anywhere in the Slack room. You don't have to mention your Hubot in order to get a response.

In the example below, when the bot hears "Hello!", it will respond, "Hi there!":

```js
bot.hear(/Hello!/, (res) => {
  return res.send('Hi there!');
});
```

```txt
tim: Hello!
hubot: Hi there!
```

**`.respond`**

`.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions the Hubot using `@`, or sends a direct message.

```javascript
bot.respond(/What's your favorite food?/, (res) => {
  return res.send("I'm a robot--I don't eat food!");
});
```

```txt
tim: @hubot What's your favorite food?
hubot: I'm a robot--I don't eat food!
jon: What's your favorite food?
... [no response because Jon didn't tag Hubot in his message]
```

#### Speaking Responding to User Input

**`.send` and `.reply`**

The "send" method allows your Hubot to send a message to the channel, and the "reply" method allows it to respond directly to a user with an @ reply. In order to understand the difference, we’ll need to accept some user input, so let's take a look at the example below.

**The Wildcard Selector**

Would you like to accept user input in your script? Take a look at the example below:

```js
bot.respond(/Hi Hubot! My name is (.*)/i, (msg) => {
  const name = msg.match[1];
  if (name === 'Hubot') {
    return msg.send("You're not Hubot--I'm Hubot!");
  } else {
    return msg.reply('Nice to meet you, ' + name + '!');
  }
});
```

```txt
tim: @hubot Hi Hubot! My name is Tim
hubot: @tim Nice to meet you, Tim!
tim: @hubot Hi Hubot! My name is Hubot
hubot: You're not Hubot--I'm Hubot!
```

Did you notice the difference between `.send` and `.reply`?

Now, let's dig into how the user input works. As you can see, we're using `.respond` to set the bot up to listen for its @ handle. In this case, it's listening for the phrase `@hubot Hi Hubot! My name is _____`. The `(.*)` syntax is a wildcard value that effectively represents the "blank" in that sentence. When the bot is triggered with the phrase, `@hubot Hi Hubot! My name is (.*)`, it stores the contents of `(.*)` in an array called `match`, which lives inside an object called `msg`. When we want to retrieve that value, we use `fav = msg.match[0]` to grab the first value in that array, which, in this case, is "Tim".

> ⚠️ **Wait, What Does the `[1]` Mean?**

`msg.match[1]` will grab the value corresponding to the second group `(.*)` in the expression. Just like most collections in JavaScript, this is a zero-based index. However, the first group is the entire expression. So in the example above, `msg.match[0]` will return the entire expression: `Hi Hubot! My name is Tim`. If you use multiple `(.*)`s within one RegEx statement, you can assign each of the values to different variables, such as: `var foo = msg.match[1]`, `var bar = msg.match[2]`.

Here's an example that uses two wildcards:

```js
bot.respond(/add (.*) and (.*)/i, (msg) => {
  const a = parseInt(msg.match[1]);
  const b = parseInt(msg.match[2]);
  const c = a + b;

  return msg.reply(a + ' plus ' + b + ' = ' + c);
});
```

```
tim: @hubot add 3 and 4
hubot: 3 plus 4 = 7
```

Here's another example that uses a switch statement to handle different cases:

```js
bot.respond(/what is your favorite (.*)/, (msg) => {
  const fav = msg.match[1];
  switch (fav) {
    case 'food':
      return msg.reply("I'm a robot--I don't eat food!");
      break;
    case 'band':
      return msg.reply("It's gotta be Daft Punk!");
      break;
    case 'programming language':
      return msg.reply('Javascript, of course!');
      break;
    default:
      return msg.reply("I don't have a favorite " + fav + ". What's yours?");
  }
});
```

```
tim: @hubot what is your favorite food?
hubot: @tim I'm a robot--I don't eat food!
tim @hubot what is your favorite color?
hubot: @tim I don't have a favorite color. What's yours?
```

#### Getting Fancy

**Regular Expressions**
You might have noticed that we haven't used quotes around the phrases Hubot is listening for; instead, we’re using `/` (e.g. `/What's your favorite food/`). Why do we do this?

Most programming languages allow you to search for text within text using something called **Regular Expressions**. Regular expressions, or "RegEx," enable you to listen for very specific patterns of text within a document, or, in this case, a chat room.

For example, if you want to find the word "what" using a RegEx, you can use the following code: `\bwhat\b`. Here, "b" represents the boundaries of the word (i.e., its beginning and end) and the "what" represents the word we are searching for.

This is an advanced example, though. **For most of your bots, you can simply enclose phrases between `/` marks**. If you would like to learn more about RegEx, check out the resources below:

- [RegexOne](http://regexone.com/) walks you through basic to advanced RegEx syntax. Check it out!
- [Regex 101](https://regex101.com/) lets you test out your RegEx without the need to constantly start and stop your bot.

To wrap things up, here's one final example of an advanced Hubot that uses a RegEx, and that can respond to a number of different inputs:

```js
module.exports = (robot) => {
  robot.respond(/is it a (weekend|holiday)\s?\?/i, (msg) => {
    const today = new Date();

    msg.reply(today.getDay() === 0 || today.getDay() === 6 ? 'YES' : 'NO');
  });

  robot.hear(/i did it/i, (msg) => {
    msg.send('Congratulations! Good job!');
  });

  robot.respond(/are you there?/i, (msg) => {
    msg.reply('Yes, usually here, and listening.');
  });

  robot.respond(/convert \$(.*) to btc/i, (res) => {
    const usd = res.match[1];
    res.reply('That is about ' + usd * 0.0024 + ' in BTC');
  });
};
```

This should give you a sense of what a Hubot can do -— and perhaps give you some ideas for building your own Hubot...
