const teamCardsContainer = document.getElementById('teamCards');
const projectCardsContainer = document.getElementById('projectCards');

function createMemberCard(member) {
  const card = document.createElement('article');
  card.className = 'member-card';

  const image = document.createElement('img');
  image.src = member.photo;
  image.alt = `${member.name} photo`;
  image.className = 'member-avatar';

  const memberCopy = document.createElement('div');
  memberCopy.className = 'member-copy';

  const name = document.createElement('h3');
  name.textContent = member.name;

  const role = document.createElement('p');
  role.textContent = member.role;

  const skillsList = document.createElement('div');
  skillsList.className = 'member-skills';
  member.skills.forEach((skill) => {
    const skillTag = document.createElement('span');
    skillTag.className = 'skill-chip';
    skillTag.textContent = skill;
    skillsList.appendChild(skillTag);
  });

  const link = document.createElement('a');
  link.href = member.github;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = 'GitHub profile';
  link.className = 'btn btn-secondary';

  memberCopy.appendChild(name);
  memberCopy.appendChild(role);
  memberCopy.appendChild(skillsList);
  memberCopy.appendChild(link);

  card.appendChild(image);
  card.appendChild(memberCopy);

  return card;
}

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.title} screenshot`;

  const title = document.createElement('h3');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  const tags = document.createElement('div');
  tags.className = 'project-tags';
  project.technologies.forEach((tech) => {
    const tag = document.createElement('span');
    tag.className = 'project-tag';
    tag.textContent = tech;
    tags.appendChild(tag);
  });

  const actions = document.createElement('div');
  actions.className = 'project-actions';

  const viewButton = document.createElement('a');
  viewButton.href = project.live;
  viewButton.target = '_blank';
  viewButton.rel = 'noreferrer';
  viewButton.className = 'btn btn-secondary';
  viewButton.textContent = 'Live demo';

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

function renderTeamMembers() {
  if (!teamCardsContainer) return;
  teamMembers.forEach((member) => {
    const card = createMemberCard(member);
    teamCardsContainer.appendChild(card);
  });
}

function renderProjects() {
  if (!projectCardsContainer) return;
  projects.forEach((project) => {
    const card = createProjectCard(project);
    projectCardsContainer.appendChild(card);
  });
}

function initRender() {
  renderTeamMembers();
  renderProjects();
}

initRender();
