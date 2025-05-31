FROM cypress/included:14.4.0

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

CMD ["npx", "cypress", "run"]
