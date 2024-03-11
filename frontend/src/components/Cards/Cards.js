// Cards JavaScript (Cards.js)

import React from 'react';
import './Cards.css'; // Make sure to create a Cards.css file for styling

function Cards() {
  const data = [
    {
      step: "Step 1",
      heading: "Birth",
      paragraph: "Welcome to the journey of life! The beginning of your story, your birth, is a special moment filled with love and joy. This is where it all started, where your unique adventure began. Embrace the memories and cherish the people who were there from the very beginning.",
      image: 'https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221_640.jpg',
      link: 'https://raisingchildren.net.au/newborns/health-daily-care/first-week-of-life/after-baby-is-born'
    },
    {
      step: "Step 2",
      heading: "School",
      paragraph: "School days are the foundation of knowledge and friendships. From classrooms to playgrounds, each day is a new lesson and a new experience. Explore the world of learning, make friends, and create memories that last a lifetime.",
      image: 'https://something.net.au/wp-content/uploads/2021/03/15a.jpeg',
      link: 'https://www.linkedin.com/pulse/9-best-memorable-memories-school-life-shagun-sharma/'
    },
    {
      step: "Step 3",
      heading: "College",
      paragraph: "College life is a chapter of self-discovery and growth. It's a time to delve into your passions, meet diverse individuals, and pave the way for your future. Embrace the challenges, relish the victories, and savor the camaraderie of this exciting phase.",
      image: 'https://media.istockphoto.com/id/1456749194/photo/college-students-arriving-for-night-school.webp?b=1&s=170667a&w=0&k=20&c=n4vQJWqfdG8NgdO2QRu7bfkvislcKTpTzb_vYp1hjqE=',
      link: 'https://www.flickonclick.com/9-best-moments-that-you-should-experience-in-college-life/'
    },
    {
      step: "Step 4",
      heading: "Job",
      paragraph: "Embark on your professional journey! The world of work awaits, filled with opportunities and challenges. Your job is not just a source of income but a platform to showcase your skills and contribute to the greater narrative of society.",
      image: 'https://imageio.forbes.com/specials-images/dam/imageserve/940280490/960x0.jpg?height=474&width=711&fit=bounds',
      link: 'https://brightside.me/articles/15-you-had-one-job-moments-that-have-us-shook-576660/'
    },
    {
      step: "Step 5",
      heading: "Marriage",
      paragraph: "Congratulations on reaching the milestone of marriage! A journey of love, companionship, and shared dreams begins. Navigate through the ups and downs hand in hand, creating a story that's uniquely yours.",
      image: 'https://scontent.fvga2-1.fna.fbcdn.net/v/t31.18172-8/17918080_1556719101005822_2368043770984451704_o.jpg?stp=dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=5xR9YEa2j_0AX9sfC3g&_nc_ht=scontent.fvga2-1.fna&oh=00_AfAwv5BKiQ_dCgUdNAgcSUIG8Q2YQN-7DHvmtA_A_GtfLw&oe=6580A49C',
      link: 'https://welscongregationalservices.net/ministry-resources/wels-marriages/marriagemoments/'
    },
    {
      step: "Step 6",
      heading: "Kids",
      paragraph: "The pitter-patter of little feet brings immense joy! Parenthood is a beautiful chapter filled with laughter, challenges, and countless precious moments. Watch your kids grow, learn, and explore the world around them.",
      image: 'https://p1.pxfuel.com/preview/264/421/89/child-children-girl-happy-royalty-free-thumbnail.jpg',
      link: 'https://www.creativehealthyfamily.com/childhood-memories-treasure-always/'
    },
    {
      step: "Step 7",
      heading: "Old Age",
      paragraph: "Old age is a phase of reflection and wisdom. It's a time to cherish the memories, share your experiences, and bask in the warmth of family. Embrace the golden years with grace and gratitude.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErlWxqfBzhpXV5YCRcja3GFPyr39xj04BFA&usqp=CAU',
      link: 'https://simplemomentsoflife.wordpress.com/tag/old-age/'
    },
  ];

  return (
    <div className="cards-container">
      {data.map(({ step, heading, paragraph, image, link }, index) => (
        <div key={index} className="card">
          <h2>{step} - {heading}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={`${heading}`} />
          </a>
          <p>{paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
