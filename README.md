# Setup project

Run this commands:

```

git clone https://github.com/Kastuell/code_editor_test_app.git

cd code_editor_test_app

yarn || npm i || pnpm i

yarn dev || npm run dev || pnpm dev

# Project started on url: http://localhost:5173/

```

# Features

Мок-сервер представляет собой промис, который резолвится либо реджектится с 50% шансом.

```

# При резолве он возвращает объект с ключами: 

{
  status: "success";
  value: string;
}

# При реджекте он возвращает объект с ключами: 

{
  status: "error";
  value: "SyntaxError: Unexpected token";
}

```


