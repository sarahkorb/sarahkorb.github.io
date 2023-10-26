---
title: "Artist Style Lyric Generator"
excerpt: "Fine-tuned GPT2 model to produce lyrics in the style of a specified artist <br/><img src='/images/music.jpeg' width='400' height='500'>"
collection: portfolio
---

Phoebe Bridgers is an indie rock artist known for her meloncholy tunes and, in particular, her evocotive and poetic lyrics which often
["concern the mundane"](https://www.popmatters.com/phoebe-bridgers-lyrical-melancholy-soothes#:~:text=concerned%20with%20the%20mundane). 
She also happens to be one of my favorite artists. 

I leverage [aitextgen](https://github.com/minimaxir/aitextgen) to fine tune a mini variant of GPT-2 on a dataset of 43 if her songs, web-scraped using `BeautifulSoup`.

[Github](https://github.com/sarahkorb/PycharmProjects/tree/main/PhoebeLyricGenerator)

## Credits

I used the following tutorials/examples to inform this project:
1. [Artist-based lyrics generator using machine learning](https://medium.com/mlearning-ai/artist-based-lyrics-generator-using-machine-learning-eb70dc4fb993)
2. [aitextgen Demo](https://github.com/minimaxir/aitextgen/blob/master/notebooks/training_hello_world.ipynb)


## Iteration 1

This is currently a work in progress. The model's output lyrics are still not ideal; some words are unintelligible, and some lyrics seem to be taken directly from the existing songs. Here's an example of a verse with the prompt "You":

```
You That make you live in the pastBut I can count on you to tell me the truth
When you've been looking for, you
And you let my nill it all so much here
And what can you want
When I will you fallen
About all the oce
```

Future work includes:
- Reformatting training data
- Altering training parameters (more iterations etc)
- Trying other gpt2 models. The current one was selected because it is optimized for CPU.

