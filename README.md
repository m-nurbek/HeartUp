# HeartUp : Where care meets innovation

## How to run the backend?
From the base directory run:
```bash
python main.py
```

## How to run frontend?
From the base directory run:
```bash
cd static
npm run dev
```

## How to build and deploy frontend?
From the base directory run:
```bash
cd static
npm run build
cd ..
git add static/dist -f
git commit -m "adding dist"
git subtree push --prefix static/dist origin gh-pages
```

## Where frontend is deployed?
https://m-nurbek.github.io/HeartUp/

## Where backend is deployed?
https://heartup-ahhs8sj7.b4a.run

To view all endpoints:
https://heartup-ahhs8sj7.b4a.run/docs
