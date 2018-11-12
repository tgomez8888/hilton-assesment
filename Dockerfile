# base image
FROM node:11.1.0

# start app
CMD ["yarn", "start"]

# install react script this so is done 
RUN npm install react-scripts@2.1.1 -g --silent

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY yarn.lock usr/src/app/yarn.lock
RUN yarn install --silent

#Copy all source files
COPY . /usr/src/app
