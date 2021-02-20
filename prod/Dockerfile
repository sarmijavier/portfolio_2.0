

FROM node:13.12.0-alpine

# set working directory
RUN mkdir /usr/src/reactapp
WORKDIR /usr/src/reactapp
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/reactapp/node_modules/.bin:$PATH
# TODO: for security purposes, you should update this Dockerfile to specify your own target user/group
# -R changes the ownership rights of a file recursively
RUN addgroup --system company-group && adduser --system company-user --ingroup company-group && \
	chown -R company-usercompany-group /usr/src/reactapp
# Denotes to copy all files in the service to '/usr/src/reactapp' folder in the container
# install and cache app dependencies
COPY --chown=company-user:company-group . /usr/src/reactapp
RUN npm install --silent 
USER root
RUN npm install react-scripts@3.0.1 -g --silent 
RUN npm install -g serve --save
# start app
CMD ["npm", "start"]