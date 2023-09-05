class: frontpage

<div>
  <h2>Bonus</h2>
  <hr/>
  <h1>Docker 🐳</h1>
</div>

---

## Docker

.row[
.col[![whales!](https://www.brianweet.com/assets/docker-blog-1/docker-logo.png)]
.col[
Docker is a tool designed to make it easier to create, deploy, and run applications by using **containers**. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one component. The container becomes the unit for distributing and testing your application.

We know that's a bit of mumbo jumbo, so let's see what that actually means.
]
]

---

## The Problems Docker Solves

.row[
.col[
Let's tell a little story.

In the olden days of [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0) (basically, the early 2000s), there was a huge difference between the machine that a developer used to build an app and what was used to deploy that app. It took days, if not weeks, to "provision" or build a computer with the right hardware and software to deploy an app. More often than not, an app that was built on a developer's machine did not work properly in production. These issues could range from the dependencies not connecting, to a different operating system, to versioning problems... or worse.

]
.col[
![meme](https://static.packt-cdn.com/products/9781787286986/graphics/B06455_07_01.jpg)
]
]

---

### One New Way

Things started getting a bit better when **virtual machines** were introduced.

In computing, a virtual machine (VM) is an emulation of a computer system. Virtual machines are based on computer architectures and provide the functionality of a physical computer. VMs can keep applications on the same hardware completely separate.

VMs work because they reduce conflicts among software components and minimize competition for hardware resources. However, they're bulky (each machine requires its own operating system), difficult to maintain, and use up a lot of storage and resources.

---

## The BETTER New Way

.row[
.col[
While VMs are still used by many companies, other developers kept trying to make things better.
Enter containers.

In contrast to VMs, containers isolate applications’ execution environments _but_ share the underlying operating system kernel.

They use far fewer resources than VMs and start up almost immediately. What's more, they can be packed far more densely on the same hardware and spun up and down en masse with far less effort and overhead.
]
.col[
<img src="https://external-preview.redd.it/aR6WdUcsrEgld5xUlglgKX_0sC_NlryCPTXIHk5qdu8.jpg?auto=webp&s=5fe64dd318eec71711d87805d43def2765dd83cd" alt="Docker meme" class="image-half">
]
]

> **Knowledge Check**: Does anyone know what we mean by an operating system "kernel"?

---

## The BETTER New Way

.row[
.col[
Containers are an efficient, granular tool for combining software into enterprise-level applications and services.

The illustration below comes from Docker and shows a VM on the left and a container on the right.

> **Knowledge Check**: Let's play that game where you spot the differences between the two images. What's different in a container? Why do you think that's important?

]
.col[
<img src="https://images.idgesg.net/images/article/2017/06/virtualmachines-vs-containers-100727624-large.jpg" alt="container vs VM" >
]
]

---

## How's Docker Work?

.row[
.col[
Docker is an open-source platform (the most popular one) for building applications using containers.

However, Docker isn't a completely new technology. Many of the components and principles existed previously. Docker is written in Go and takes advantage of several features of the Linux kernel to deliver its functionality, including namespaces and cgroups (more on those in the Additional Resources section).

The ultimate goal of Docker is to mirror our dev environment with our production environment. This is mostly useful for your back-end but can be applied to your front-end applications as well! It's cool to run Docker locally, but its real benefit comes into play while running it on production machines.

Take a look at this _very_ simplified version of how Docker works.

> **Knowledge Check**: Can someone explain what's going on here?

]
.col[

![diagram](https://blog.octo.com/wp-content/uploads/2014/01/Diapositive1.png)
]
]

---

## The Main Components of Docker

OK, yes, the short answer is "containers," but those don't just grow on trees. Where do containers come from, you might ask? Let's find out!

**The High Level**

`Dockerfile --> Image --> Container --> Docker Engine --> *chef kiss emoji*`

---

## The Main Components of Docker

.row[
.col[

### Dockerfile

Instructions to create an image (more on those later).

- Specifies the OS, languages, etc.

  - Explains what the container will do when it's run.
  - You can create your own or use premade ones.
    ]

.col[

### Image

A blueprint to build a container.

- A portable file system that may contain files for the OS, framework files, and the files for an app.
- Tells each component what to do and when.
- Containers can share image layers, making them very efficient.

]

.col[

### Container

You already know this! An isolated instance created from an image, running the app on whatever OS you have.

]

]

---

## The Main Components of Docker

### Docker Engine

Integrates with the OS to run the Docker containers; sits directly on top of the OS. It's very fast and inexpensive.

#### Docker Daemon

The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. It does the heavy lifting and is a part of the Docker engine.

#### Docker Client (CLI)

The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands.

---

## The Main Components of Docker

### Docker Desktop

A native application for MacOS and Windows machines that provides an easy-to-use development environment for building, shipping, and running dockerized apps.

---

## Activity: Learning by Teaching

Teaching a new concept you just learned can help you to develop a better understanding of that concept and also helps with knowledge retention. In your group, have each person choose one of the following topics. Then spend 5-10 minutes to research that topic individually.

- Docker image
- Container
- Dockerfile
- Docker Hub

When everyone is ready, present what you learned to others in your group.

---

## What is a Container

.row[
.col[
Operating systems have something called a kernel. This kernel is a running software process that governs access to all the programs, different programs like Chrome, terminal etc. A kernel has complete control over everything in the system.

Lets say Chrome sends a system call to the kernel to read information from the hard drive. And the kernel based on where the request is coming from and what it needs redirects the request to the appropriate section of the hard drive. This entire process of segmenting a resource based on the process that is asking for it is called **namespacing**.

This is what a container is based on. A container is not a physical construct that exists inside your computer. Instead it is a process or set of processes that have a grouping of resources specifically assigned to it. Resources like memory, RAM, CPU, network.

]
.col[![](https://codeahoy.com/img/dockercontainers/containers-on-box.png)]
]

---

## How is an Image Related to a Container?

As mentioned earlier, a Docker image is nothing more than a filesystem snapshot, a set of directories and files. For instance, in an image of Chrome, there will be files that Chrome needs to run and a specific startup command that actually runs Chrome. The kernel will isolate a section of the hard drive and make it available to just the running container.

So when you run a container from an image, the filesystem snapshot of that image is placed into a section of the hard drive that can only be accessed by the running container. In our case, when the startup command executes it will start Chrome and only utilize the resources that are segmented specifically for this container.

> Note:Only the Linux operating system uses a kernel and namespacing. So how do Windows and macOS machines use Docker then? A Linux virtual machine is installed as part of the Docker installation. As long as Docker is running it also runs a Linux VM. All of your containers will be created inside of this VM and it hosts a Linux kernel that limits access and segments resources for the different containers.

---

## Install Docker

To begin, we're going to install Docker Desktop, which includes everything we'll need for our lessons: Docker Engine, the Docker CLI client and Docker Compose.

---

## Docker Desktop on Mac

[Follow these instructions](https://docs.docker.com/docker-for-mac/install/) to install Docker for your Mac. The process is pretty straightforward but keep in mind that support for Apple chips (e.g. M1) is still relatively new, and if your Mac is using it you'll need to make sure to correctly select that option while downloading for it to work correctly.

**Tip**: If you're unsure which processor your computer uses, you can identify whether your Mac is powered by an Intel processor or Apple silicon by using the **About This Mac** feature that's available under the Apple menu. Click the Apple menu and select the option **About This Mac**. In the About This Mac window, look for an item labeled **Processor** or **Chip**.

---

## Docker Hub

Docker Hub is a repository of free public images that can be downloaded and run. According to [Docker](https://www.docker.com/), it is the world's largest library and community for container images. You can access and create an account on Docker Hub [here](https://hub.docker.com/).

---

## Hello world

.row[
.col[

### Run

Let's run our first docker command. Open terminal, make sure `docker-daemon` is running.

```sh
docker run hello-world
```

Scroll up, look for the text `Unable to find image 'hello-world:latest' locally`.
]
.col[

### What this means?

1. When the command is run, it starts up docker client/docker CLI.
2. Which in turn takes commands from you and communicates command to docker server.
3. Docker server checks to see if this image exists locally in image cache.
4. For the first run of this image cache will be empty and this is where docker hub comes in.
5. Docker server checks with docker hub which has the image
6. The image will be downloaded and stored in the image cache.
7. Now docker server will use this image to create an instance of a container.
   ]
   ]

---

## Hello world

.row[
.col[
Run the same command a second time. Notice anything different from the first run?

The second time you will not see the message `Unable to find image 'hello-world:latest' locally`. Why's that? Think about it.

]
.col[
<img src="https://i.redd.it/jlui6uo24vk21.jpg" alt="hackerman" class="image-half">

]
]

---

## Docker Desktop

You've just successfully pulled your first Docker image and started a container using the command line! The Docker images you pull and the containers you create can all be managed by the command line but if you have multiple images and containers to manage you might want to consider using Docker Desktop to manage them. Let's take a look at how it works.

1. Start the Docker Desktop application if it's not already open.
2. Double-click `Docker.app` in the `Applications` folder to start Docker.
3. The Docker menu in the top status bar indicates that Docker Desktop is running, and accessible from a terminal.

---

## Navigating Docker Desktop

After Docker Desktop has started, you'll notice in the default **Containers / Apps** section that you already have a couple of running containers. Where do you think they came from? If you said from the two containers you started from the command line then you'd be correct!

> Note: Your container names will differ from the ones in the following screenshot. You have the option to specifiy a name for your containers when you start them but if you don't provide a name then Docker will generate a random one like the one you have now.

- Now click on one of the container title bars to expand the console, notice the log output. It should look familiar, it's the same output we saw from the command line from running the containers the first time.

- Next, let's start a brand new container from our `hello-world` image. Click on the **Images** tab, hover over the `hello-world` image and click on the **RUN** button that appears. In the dialog box that pops up, expand the **Optional Settings** button and give your new container the name "docker-desktop-test" and finally click on the **Run** button to start the new container.

- A new container has been started! Click on the **Containers / Apps** tab and now you'll see three separate containers generated from the same Docker image now, one of which should be named "docker-desktop-test".

---

## Navigating Docker Desktop

- Great work! Now that we're done, let's do some clean up and delete all 3 running containers since they're still running and we no longer need them. Hover over each individual container and click on the delete icon to stop and remove each one.

- You should now see a screen confirming that you don't have any containers currently running.

- We're not done yet! Go back to the **Images** tab, notice the Docker image the containers were created from is still there and you can still generate a new container from it in the future if needed.

---

## Container lifecycle

.row[
.col[

To start up a new container from an image we use `docker run` command. `docker run` creates a new container and starts it. But creating a container and starting it up are 2 different processes.

> docker run = docker create + docker start

When a container is created the file system is prepped for use in the new container. To start the container means executing the startup command that comes with the image.

]
.col[

<img src="https://miro.medium.com/max/720/0*3_uIz_YMiyZxMwKn" alt="container lifecycle" class=""/>

]
]

---

## Container lifecycle

Lets see it in action. Open terminal and create hello-world image.

```sh
docker create hello-world
```

This will output an id something like this, `2ce9bdb14238e8a6ba2ac68964ee8ca48e93e9cbf90d0c2c3f441d6be279e8b4`. This is the id of the container that just executed.

Now run `docker start` with the container id.

```sh
docker start -a 2ce9bdb14238e8a6ba2ac68964ee8ca48e93e9cbf90d0c2c3f441d6be279e8b4
```

> `-a` makes docker watch for output from the container and print it out to the terminal.

---

## Docker Commands

### `docker run`

We have already run this command before, it runs a container

We can also give another command with run to override the startup command.

`docker run <image name> <command-to-override>`

Example, `docker run busybox ls` will list all the files in `busybox` image.

---

## Docker Commands

### `docker ps`

Lists all the different currently running containers.

Go ahead run `docker ps` on the terminal. You may not see anything right now as there are no active containers. Lets run `docker run busybox ping google.com`, this will keep pinging `google.com` for us and on another terminal run `docker ps`,

Now you will see something like,

```sh
CONTAINER ID   IMAGE     COMMAND             CREATED         STATUS         PORTS     NAMES
f7eea52fa97e   busybox   "ping google.com"   7 seconds ago   Up 6 seconds             jovial_nash
```

> Status shows the status of the container, if it is still up or exited.
> jovial_nash is a randomly generated name to identify this container.

Now `ctrl-c` on the terminal which is running the container and run `docker ps` again. You will again get no output.

`docker ps --all` will list all the containers you ever ran.

---

## Docker Commands

### `docker start`

Starts the docker container after it has been created. We can also start an exited container.

Run `docker ps --all`.

```sh
CONTAINER ID   IMAGE                                 COMMAND                  CREATED          STATUS                       PORTS                    NAMES
2ce9bdb14238   hello-world                           "/hello"                 52 minutes ago   Created                                               vibrant_benz
f7eea52fa97e   busybox                               "ping google.com"        17 hours ago     Exited (0) 17 hours ago                               jovial_nash
570646e6503c   busybox                               "ls"                     17 hours ago     Exited (0) 17 hours ago                               intelligent_lederberg

```

Find the hello-world container id. Use this id to restart the exited container.

`docker start -a 2ce9bdb14238`

---

## Docker Commands

### `docker logs`

To retrieve logs of an exited or up container. All you need is the container id.

You can use the container id used previously or get a new one by running `docker ps --all`.

`docker logs 2ce9bdb14238`

This will print all the logs emitted from that container.

---

## Docker Commands

### `docker stop` OR `docker kill`

If `ctrl-c` is not an option or even otherwise, in order to stop a running container we can use stop or kill command. They both stop the container with just one key difference. `docker stop` sends a signal _SIGTERM_ (short for terminate signal) to process in a container to shut down on its own time. Gives process time to do any clean up activities. `docker kill` issues a _SIGKILL_ (kill signal) message to the primary running process inside the container which means stop right now with no time for any clean up activity.

If the container doesn't stop with `docker stop` you can always run `docker kill` instead.

Lets try it. Run the ping command.

`docker run busybox ping google.com`

---

## Docker Commands

### `docker stop` OR `docker kill`

This will keep the container running. Run `docker ps` to get its container id and use that id to stop the container.

`docker stop 3ddc6041a39d`

It may take couple of seconds to stop the server. Now run the ping command again but this time use kill to stop the container.

Docker internally uses kill to stop the process if stop command automatically is unable to in 10 seconds.

> Note: You can also give first few characters of the container id so long as it can uniquely identify the container. For instance you could also run the above command as `docker stop 3dd`.

---

## Docker Commands

### `docker image ls`

Lists all images in local image cache.

---

## Docker Commands

### `docker exec`

Another very useful command. This command runs a command in a running container. The command started using `docker exec` only runs while the container’s primary process is running, and it is not restarted if the container is restarted.

As it says we need to have a running conatiner so start pinging google.com again

`docker run busybox ping google.com`

Find the container id `docker ps`

```sh
CONTAINER ID   IMAGE     COMMAND             CREATED          STATUS          PORTS                    NAMES
56379bf033ff   busybox   "ping google.com"   27 seconds ago   Up 26 seconds                            upbeat_allen
```

---

## Docker Commands

### `docker exec`

We will use this command to acess

```
docker exec -it 56379bf033ff /bin/sh
```

> `-it` is for interactive terminal

Now try `ls` or `cd`, whatever shell commands you want to try. Whenever you're done enter the command `exit` to leave the shell associated with your container.

---

## Docker Commands

### `docker rm`

Removes one or more stopped container. Run `docker ps --all` to get the container id of a stopped container. Use any id to run `docker rm CONTAINERID`

To remove a running conatiner use flag `-f` or `--force`. Go ahead try it.

---

## Docker Commands

### `docker system prune`

This will delete all stopped containers and your image cache among other things. If run you will have to redownload images from docker hub the first time they are run.

Run `docker system prune` on the terminal. You will see something like,

```sh
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N]
```

Be very sure before running this command.

---

## Additional Resources

- [Docker Underlying Technology](https://docs.docker.com/engine/docker-overview/#the-underlying-technology)
- [Wikipedia: Namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)
- [Cgroups](https://en.wikipedia.org/wiki/Cgroups)
