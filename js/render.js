// Cache the containers where dynamic cards will be inserted.
const teamCardsContainer = document.getElementById('teamCards');
const projectCardsContainer = document.getElementById('projectCards');

// Build one team member card from the data object.
function createMemberCard(member) {
  const card = document.createElement('article');
  card.className = 'member-card';

  // Team member photo.
  const image = document.createElement('img');
  image.src = member.photo;
  image.alt = `${member.name} photo`;
  image.className = 'member-avatar';

  // Wrap the text content and actions together.
  const memberCopy = document.createElement('div');
  memberCopy.className = 'member-copy';

  // Member name.
  const name = document.createElement('h3');
  name.textContent = member.name;

  // Member role.
  const role = document.createElement('p');
  role.textContent = member.role;

  // Render each skill as a small chip.
  const skillsList = document.createElement('div');
  skillsList.className = 'member-skills';
  member.skills.forEach((skill) => {
    const skillTag = document.createElement('span');
    skillTag.className = 'skill-chip';
    skillTag.textContent = skill;
    skillsList.appendChild(skillTag);
  });

  // External GitHub profile link.
  const link = document.createElement('a');
  link.href = member.github;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = 'GitHub profile';
  link.className = 'btn btn-secondary';

  // Assemble the card structure.
  memberCopy.appendChild(name);
  memberCopy.appendChild(role);
  memberCopy.appendChild(skillsList);
  memberCopy.appendChild(link);

  card.appendChild(image);
  card.appendChild(memberCopy);

  return card;
}

// Build one project card from the data object.
function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  // Project preview image.
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.title} screenshot`;

  // Project title.
  const title = document.createElement('h3');
  title.textContent = project.title;

  // Project summary.
  const description = document.createElement('p');
  description.textContent = project.description;

  // Render the technology tags.
  const tags = document.createElement('div');
  tags.className = 'project-tags';
  project.technologies.forEach((tech) => {
    const tag = document.createElement('span');
    tag.className = 'project-tag';
    tag.textContent = tech;
    tags.appendChild(tag);
  });

  // Container for action buttons.
  const actions = document.createElement('div');
  actions.className = 'project-actions';

  // Link to the live demo.
  const viewButton = document.createElement('a');
  viewButton.href = project.live;
  viewButton.target = '_blank';
  viewButton.rel = 'noreferrer';
  viewButton.className = 'btn btn-secondary';
  viewButton.textContent = 'Live demo';

  // Link to the repository.
  const repoButton = document.createElement('a');
  repoButton.href = project.repo;
  repoButton.target = '_blank';
  repoButton.rel = 'noreferrer';
  repoButton.className = 'btn btn-primary';
  repoButton.textContent = 'GitHub repo';

  actions.appendChild(viewButton);
  actions.appendChild(repoButton);

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tags);
  card.appendChild(actions);

  return card;
}

// Render all team members into the team section.
function renderTeamMembers() {
  if (!teamCardsContainer) return;
  teamMembers.forEach((member) => {
    const card = createMemberCard(member);
    teamCardsContainer.appendChild(card);
  });
}

// Render all projects into the projects section.
function renderProjects() {
  if (!projectCardsContainer) return;
  projects.forEach((project) => {
    const card = createProjectCard(project);
    projectCardsContainer.appendChild(card);
  });
}

// Initialize both dynamic sections.
function initRender() {
  renderTeamMembers();
  renderProjects();
}

initRender();
