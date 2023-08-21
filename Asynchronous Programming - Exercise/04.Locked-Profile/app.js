function lockedProfile() {
    document.addEventListener("DOMContentLoaded", async () => {
        const profilesContainer = document.getElementById("profiles");
      
        try {
          const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
          const data = await response.json();
      
          Object.values(data).forEach(profile => {
            const profileCard = createProfileCard(profile);
            profilesContainer.appendChild(profileCard);
          });
        } catch (error) {
          console.error(error);
        }
      });
      
      function createProfileCard(profile) {
        const card = document.createElement("div");
        card.className = "profile-card";
        
        const name = document.createElement("h2");
        name.textContent = profile.name;
        
        const age = document.createElement("p");
        age.textContent = `Age: ${profile.age}`;
        
        const email = document.createElement("p");
        email.textContent = `Email: ${profile.email}`;
        
        const lockStatus = document.createElement("p");
        lockStatus.textContent = `Profile ${profile.locked ? "Locked" : "Unlocked"}`;
        
        const showMoreButton = document.createElement("button");
        showMoreButton.textContent = "Show more";
        showMoreButton.addEventListener("click", () => {
          if (!profile.locked) {
            age.style.display = "block";
            email.style.display = "block";
            lockStatus.textContent = "Profile Unlocked";
          }
        });
        
        const hideButton = document.createElement("button");
        hideButton.textContent = "Hide it";
        hideButton.addEventListener("click", () => {
          if (!profile.locked) {
            age.style.display = "none";
            email.style.display = "none";
            lockStatus.textContent = "Profile Unlocked";
          }
        });
        
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(email);
        card.appendChild(lockStatus);
        card.appendChild(showMoreButton);
        card.appendChild(hideButton);
        
        return card;
      }
      
}