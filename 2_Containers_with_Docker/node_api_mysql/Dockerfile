# 1 - BASE IMAGE
FROM node
# 2 - ROOT
WORKDIR /app
# 3 - COPY EVERYTHING FOR ROOT (/app)
COPY . ./
# 4 - RUN NPM INSTALL INSIDE ROOT FOLDER (/app)
RUN npm install
#5 - EXPOSE PORT 3000
EXPOSE 3000
# 6 - FINAL COMMAND
CMD ["npm", "start"]