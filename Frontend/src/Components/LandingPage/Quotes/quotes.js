const quotes = [
    {
      q: "Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind.",
      a: "Theodore Roosevelt",
      c: "89",
      h: "<blockquote>&ldquo;Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>",
    },
    {
      q: "Love is the expression of one's values.",
      a: "Ayn Rand",
      c: "39",
      h: "<blockquote>&ldquo;Love is the expression of one's values.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
    },
    {
      q: "Where there's life, there's hope.",
      a: "Stephen Hawking",
      c: "33",
      h: "<blockquote>&ldquo;Where there's life, there's hope.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>",
    },
    {
      q: "The most difficult times for many of us are the ones we give ourselves.",
      a: "Pema Chodron",
      c: "71",
      h: "<blockquote>&ldquo;The most difficult times for many of us are the ones we give ourselves.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>",
    },
    {
      q: "Do not allow your inner doubts to keep you from achieving what you can do.",
      a: "Lolly Daskal",
      c: "74",
      h: "<blockquote>&ldquo;Do not allow your inner doubts to keep you from achieving what you can do.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>",
    },
    {
      q: "The future will be shaped by those willing to commit their minds and their bodies to the task.",
      a: "Robert F. Kennedy",
      c: "94",
      h: "<blockquote>&ldquo;The future will be shaped by those willing to commit their minds and their bodies to the task.&rdquo; &mdash; <footer>Robert F. Kennedy</footer></blockquote>",
    },
    {
      q: "To seek greatness is the only righteous vengeance.",
      a: "Criss Jami",
      c: "50",
      h: "<blockquote>&ldquo;To seek greatness is the only righteous vengeance.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>",
    },
    {
      q: "Never do things others can do and will do if there are things others cannot do or will not do.",
      a: "Amelia Earhart",
      c: "94",
      h: "<blockquote>&ldquo;Never do things others can do and will do if there are things others cannot do or will not do.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>",
    },
    {
      q: "You may be disappointed if you fail, but you are doomed if you don't try. ",
      a: "Beverly Sills",
      c: "74",
      h: "<blockquote>&ldquo;You may be disappointed if you fail, but you are doomed if you don't try. &rdquo; &mdash; <footer>Beverly Sills</footer></blockquote>",
    },
    {
      q: "Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.",
      a: "Eckhart Tolle",
      c: "110",
      h: "<blockquote>&ldquo;Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>",
    },
    {
      q: "Even if you stumble and fall down, it doesn't mean you've chosen the wrong path.",
      a: "Zen Proverb",
      c: "80",
      h: "<blockquote>&ldquo;Even if you stumble and fall down, it doesn't mean you've chosen the wrong path.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
    },
    {
      q: "One of the keys to happiness is a bad memory.",
      a: "Rita Mae Brown",
      c: "45",
      h: "<blockquote>&ldquo;One of the keys to happiness is a bad memory.&rdquo; &mdash; <footer>Rita Mae Brown</footer></blockquote>",
    },
    {
      q: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
      a: "Carl Bard",
      c: "108",
      h: "<blockquote>&ldquo;Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.&rdquo; &mdash; <footer>Carl Bard</footer></blockquote>",
    },
    {
      q: "No idea, no matter how good, will work if it doesn't get used.",
      a: "Peter A. Cohen",
      c: "62",
      h: "<blockquote>&ldquo;No idea, no matter how good, will work if it doesn't get used.&rdquo; &mdash; <footer>Peter A. Cohen</footer></blockquote>",
    },
    {
      q: "It is secondary whether we choose belief or defiance. What is precious is that we are always able to choose.",
      a: "Ming-Dao Deng",
      c: "108",
      h: "<blockquote>&ldquo;It is secondary whether we choose belief or defiance. What is precious is that we are always able to choose.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>",
    },
    {
      q: "If you want to feel happy, do something for yourself. If you want to feel fulfilled, do something for someone else.",
      a: "Simon Sinek",
      c: "115",
      h: "<blockquote>&ldquo;If you want to feel happy, do something for yourself. If you want to feel fulfilled, do something for someone else.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>",
    },
    {
      q: "Time heals what reason cannot.  ",
      a: "Seneca",
      c: "32",
      h: "<blockquote>&ldquo;Time heals what reason cannot.  &rdquo; &mdash; <footer>Seneca</footer></blockquote>",
    },
    {
      q: "If you pray for rain, be prepared to deal with some mud.",
      a: "Mary Engelbreit",
      c: "56",
      h: "<blockquote>&ldquo;If you pray for rain, be prepared to deal with some mud.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>",
    },
    {
      q: "Saying nothing sometimes says the most.",
      a: "Emily Dickinson",
      c: "39",
      h: "<blockquote>&ldquo;Saying nothing sometimes says the most.&rdquo; &mdash; <footer>Emily Dickinson</footer></blockquote>",
    },
    {
      q: "To do great work one must be very idle as well as very industrious.",
      a: "Samuel Butler",
      c: "67",
      h: "<blockquote>&ldquo;To do great work one must be very idle as well as very industrious.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>",
    },
    {
      q: "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
      a: "Confucius",
      c: "96",
      h: "<blockquote>&ldquo;The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.&rdquo; &mdash; <footer>Confucius</footer></blockquote>",
    },
    {
      q: "Your world is a living expression of how you are using and have used your mind.",
      a: "Earl Nightingale",
      c: "79",
      h: "<blockquote>&ldquo;Your world is a living expression of how you are using and have used your mind.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>",
    },
    {
      q: "If there is a book that you want to read, but it hasn't been written yet, then you must write it.",
      a: "Toni Morrison",
      c: "97",
      h: "<blockquote>&ldquo;If there is a book that you want to read, but it hasn't been written yet, then you must write it.&rdquo; &mdash; <footer>Toni Morrison</footer></blockquote>",
    },
    {
      q: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
      a: "Ayn Rand",
      c: "81",
      h: "<blockquote>&ldquo;You can avoid reality, but you cannot avoid the consequences of avoiding reality.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
    },
    {
      q: "Passion is born deaf and dumb.",
      a: "Honore de Balzac",
      c: "30",
      h: "<blockquote>&ldquo;Passion is born deaf and dumb.&rdquo; &mdash; <footer>Honore de Balzac</footer></blockquote>",
    },
    {
      q: "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.",
      a: "Ronald Reagan",
      c: "89",
      h: "<blockquote>&ldquo;Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>",
    },
    {
      q: "Note that this journey is uniquely yours, no one elses. So the path has to be your own.",
      a: "Jon Kabat-Zinn",
      c: "87",
      h: "<blockquote>&ldquo;Note that this journey is uniquely yours, no one elses. So the path has to be your own.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>",
    },
    {
      q: "The key to success is to focus our conscious mind on things we desire not things we fear. ",
      a: "Brian Tracy",
      c: "90",
      h: "<blockquote>&ldquo;The key to success is to focus our conscious mind on things we desire not things we fear. &rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
    },
    {
      q: "You can have the mind or you can have the moment.",
      a: "Naval Ravikant",
      c: "49",
      h: "<blockquote>&ldquo;You can have the mind or you can have the moment.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>",
    },
    {
      q: "Your problem isn't the problem. Your reaction is the problem.",
      a: "Unknown",
      c: "61",
      h: "<blockquote>&ldquo;Your problem isn't the problem. Your reaction is the problem.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
    },
    {
      q: "Art, like morality, consists of drawing the line somewhere.",
      a: "Gilbert Chesterton",
      c: "59",
      h: "<blockquote>&ldquo;Art, like morality, consists of drawing the line somewhere.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>",
    },
    {
      q: "Live, travel, adventure, bless, and don't be sorry.  ",
      a: "Jack Kerouac",
      c: "53",
      h: "<blockquote>&ldquo;Live, travel, adventure, bless, and don't be sorry.  &rdquo; &mdash; <footer>Jack Kerouac</footer></blockquote>",
    },
    {
      q: "Giving is living. If you stop wanting to give, there's nothing more to live for.",
      a: "Audrey Hepburn",
      c: "80",
      h: "<blockquote>&ldquo;Giving is living. If you stop wanting to give, there's nothing more to live for.&rdquo; &mdash; <footer>Audrey Hepburn</footer></blockquote>",
    },
    {
      q: "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.",
      a: "Dalai Lama",
      c: "89",
      h: "<blockquote>&ldquo;Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
    },
    {
      q: "Only by attracting the best people will you accomplish great deeds.",
      a: "Colin Powell",
      c: "67",
      h: "<blockquote>&ldquo;Only by attracting the best people will you accomplish great deeds.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
    },
    {
      q: "Learning is a weightless treasure you can always carry easily.",
      a: "Chinese Proverb",
      c: "62",
      h: "<blockquote>&ldquo;Learning is a weightless treasure you can always carry easily.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
    },
    {
      q: "To affect the quality of the day, that is the highest of arts.",
      a: "Henry David Thoreau",
      c: "62",
      h: "<blockquote>&ldquo;To affect the quality of the day, that is the highest of arts.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>",
    },
    {
      q: "Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!",
      a: "Sathya Sai Baba",
      c: "107",
      h: "<blockquote>&ldquo;Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>",
    },
    {
      q: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
      a: "Rumi",
      c: "127",
      h: "<blockquote>&ldquo;Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.&rdquo; &mdash; <footer>Rumi</footer></blockquote>",
    },
    {
      q: "Opportunities multiply as they are seized.",
      a: "Sun Tzu",
      c: "42",
      h: "<blockquote>&ldquo;Opportunities multiply as they are seized.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>",
    },
    {
      q: "Words, once they are printed, have a life of their own.",
      a: "Carol Burnett",
      c: "55",
      h: "<blockquote>&ldquo;Words, once they are printed, have a life of their own.&rdquo; &mdash; <footer>Carol Burnett</footer></blockquote>",
    },
    {
      q: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.",
      a: "Benjamin Franklin",
      c: "86",
      h: "<blockquote>&ldquo;Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.&rdquo; &mdash; <footer>Benjamin Franklin</footer></blockquote>",
    },
    {
      q: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
      a: "Thich Nhat Hanh",
      c: "91",
      h: "<blockquote>&ldquo;The present moment is filled with joy and happiness. If you are attentive, you will see it.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>",
    },
    {
      q: "We can have more than we've got because we can become more than we are.",
      a: "Jim Rohn",
      c: "71",
      h: "<blockquote>&ldquo;We can have more than we've got because we can become more than we are.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
    },
    {
      q: "It is those who concentrate on but one thing at a time who advance in this world.",
      a: "Gary Keller",
      c: "81",
      h: "<blockquote>&ldquo;It is those who concentrate on but one thing at a time who advance in this world.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>",
    },
    {
      q: "If you want to see things just as they are, then you yourself must practice just as you are.",
      a: "Dogen",
      c: "92",
      h: "<blockquote>&ldquo;If you want to see things just as they are, then you yourself must practice just as you are.&rdquo; &mdash; <footer>Dogen</footer></blockquote>",
    },
    {
      q: "It is safer to search in the maze than to remain in a cheeseless situation.",
      a: "Spencer Johnson",
      c: "75",
      h: "<blockquote>&ldquo;It is safer to search in the maze than to remain in a cheeseless situation.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>",
    },
    {
      q: "If you let your head get too big, it'll break your neck.",
      a: "Elvis Presley",
      c: "56",
      h: "<blockquote>&ldquo;If you let your head get too big, it'll break your neck.&rdquo; &mdash; <footer>Elvis Presley</footer></blockquote>",
    },
    {
      q: "When you have vision it affects your attitude. Your attitude is optimistic rather than pessimistic. ",
      a: "Charles Swindoll",
      c: "100",
      h: "<blockquote>&ldquo;When you have vision it affects your attitude. Your attitude is optimistic rather than pessimistic. &rdquo; &mdash; <footer>Charles Swindoll</footer></blockquote>",
    },
    {
      q: "Success is the sum of small efforts, repeated day in and day out.",
      a: "Robert Collier",
      c: "65",
      h: "<blockquote>&ldquo;Success is the sum of small efforts, repeated day in and day out.&rdquo; &mdash; <footer>Robert Collier</footer></blockquote>",
    },
  ];
  
export default quotes;