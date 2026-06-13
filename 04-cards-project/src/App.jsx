import React from 'react'
import Cards from '../component/cards'


const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      name: "Google",
      datePosted: "5 days ago",
      tag1: "Full Time",
      post: "Frontend Engineer",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
      name: "Meta",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      post: "React Developer",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      name: "Amazon",
      datePosted: "1 week ago",
      tag1: "Full Time",
      post: "Software Development Engineer",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      name: "Apple",
      datePosted: "3 days ago",
      tag1: "Full Time",
      post: "iOS Engineer",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      name: "Microsoft",
      datePosted: "10 days ago",
      tag1: "Part Time",
      post: "Cloud Engineer",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003",
      name: "Netflix",
      datePosted: "4 weeks ago",
      tag1: "Full Time",
      post: "Backend Engineer",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/024/039/068/original/nvidia-logo-transparent-free-png.png",
      name: "NVIDIA",
      datePosted: "6 days ago",
      tag1: "Full Time",
      post: "AI Engineer",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.46oHP7Q3VyjR17ON4siazQHaHa?pid=Api&P=0&h=180",
      name: "Adobe",
      datePosted: "8 weeks ago",
      tag1: "Internship",
      post: "Frontend Intern",
      tag2: "Entry Level",
      pay: "$30/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://cdn.branch.io/branch-assets/1586032766114-og_image.png",
      name: "Uber",
      datePosted: "2 days ago",
      tag1: "Full Time",
      post: "Full Stack Developer",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?pid=Api&P=0&h=180",
      name: "Salesforce",
      datePosted: "12 days ago",
      tag1: "Contract",
      post: "DevOps Engineer",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Chennai, India",
    },
  ];

  console.log(jobOpenings)
  return (
    <div className='parent'>

      {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Cards brandLogo={elem.brandLogo} company={elem.name} post={elem.post} time={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}


    </div>
  )
}

export default App