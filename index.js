const data = [
  {
    name: "Bobby",
    age: 22,
    gender: "male",
    lookingfor: "female",
    location: "Derenkivets",
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: "Kit",
    age: 23,
    gender: "female",
    lookingfor: "male",
    location: "Nabutiv",
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: "Malyuk",
    age: 2,
    gender: "male",
    lookingfor: "female",
    location: "Garbuzov",
    image: 'https://randomuser.me/api/portraits/men/14.jpg'
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// next event
document.getElementById("next").addEventListener("click", () => {
  let loading = document.createElement("h1");
  loading.innerText = "Loading...";
  document.body.prepend(loading);
  setTimeout(() => {
    nextProfile();
    loading.remove();
  }, 1000)
});

// Next Profile Display
function nextProfile() {
  let currentProfile = profiles.next().value;
  if(!currentProfile) {
    alert("We found every person near you!");
    window.location.reload();
    return;
  }
  document.querySelector("#profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
    </ul>
  `;

  document.querySelector("#imageDisplay").innerHTML = `
    <img src=${currentProfile.image}>
  `;
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
        {value: profiles[nextIndex++], done: false} :
        {done: true}
    }
  }
}