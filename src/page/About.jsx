import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

const AboutUs = () => {
  const { t } = useTranslation();

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToNextSection = () => {
    const missionSection = document.querySelector('.aboutus-mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "M. Ferial dwi putera",
      position: "President Director",
      image: require('../assets/img/ferial.png'),
      bio: t('aboutUs.members.ferial.bio'),
      experience: "8+ years",
      skills: t('aboutUs.members.ferial.skills', { returnObjects: true }),
    },
    {
      id: 2,
      name: "M. Ferarry Perdana Wardhana",
      position: "Director",
      image: require('../assets/img/ferari.png'),
      bio: t('aboutUs.members.ferarry.bio'),
      experience: "6+ years",
      skills: t('aboutUs.members.ferarry.skills', { returnObjects: true }),
    },
    {
      id: 3,
      name: "Sidharta Dharma Wardhana",
      position: "Director",
      image: require('../assets/img/pakdarta.png'),
      bio: t('aboutUs.members.sidharta.bio'),
      experience: "5+ years",
      skills: t('aboutUs.members.sidharta.skills', { returnObjects: true }),
    },
    {
      id: 4,
      name: "Ardiansyah Saputra",
      position: "Director",
      image: require('../assets/img/pakardi.png'),
      bio: t('aboutUs.members.ardiansyah.bio'),
      experience: "7+ years",
      skills: t('aboutUs.members.ardiansyah.skills', { returnObjects: true }),
    },
    {
      id: 5,
      name: "Iqbal",
      position: "Director of Human Resources",
      image: require('../assets/img/pakiqbal.png'),
      bio: t('aboutUs.members.iqbal.bio'),
      experience: "6+ years",
      skills: t('aboutUs.members.iqbal.skills', { returnObjects: true }),
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('aboutus-modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="aboutus-hero-section">
        <div className="aboutus-hero-content">
          <div className="aboutus-hero-text">
            <h1 className="aboutus-hero-title">{t('aboutUs.hero.title')}</h1>
            <div className="aboutus-hero-description">
              <p>{t('aboutUs.hero.description')}</p>
            </div>
          </div>

          <div className="aboutus-hero-image">
            <img src={require('../assets/img/teamindobiz.png')} alt="Our creative workspace" />
          </div>

          <div className="aboutus-scroll-indicator">
            <div className="aboutus-scroll-circle" onClick={scrollToNextSection}>
              <span>{t('aboutUs.hero.scroll')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="aboutus-mission-section">
        <div className="aboutus-mission-content">
          <p className="aboutus-mission-text">{t('aboutUs.mission.description')}</p>
        </div>
      </section>

      {/* Office Section */}
      <section className="aboutus-office-section">
        <div className="aboutus-office-images">
          <div className="aboutus-office-image aboutus-office-wide">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Office workspace" />
          </div>
          <div className="aboutus-office-image aboutus-office-square">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Meeting" />
          </div>
          <div className="aboutus-office-image aboutus-office-tall">
            <img src={require('../assets/img/pexels-vlad-alexandru-popa-1402787.jpg')} alt="Modern office" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="aboutus-vision-section">
        <div className="aboutus-vision-content">
          <h2 className="aboutus-vision-title">{t('aboutUs.vision.description')}</h2>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="aboutus-team-section">
        <div className="aboutus-team-header">
          <h2 className="aboutus-team-title">{t('aboutUs.team.title')}</h2>
          <p className="aboutus-team-description">{t('aboutUs.team.description')}</p>
        </div>

        <div className="aboutus-team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="aboutus-team-member" onClick={() => openModal(member)}>
              <div className="aboutus-member-image">
                <img src={member.image} alt={member.name} />
                <div className="aboutus-member-overlay">
                  <span>{t('aboutUs.team.viewDetails')}</span>
                </div>
              </div>
              <div className="aboutus-member-info">
                <h3 className="aboutus-member-name">{member.name}</h3>
                <p className="aboutus-member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="aboutus-modal-overlay" onClick={handleModalClick}>
          <div className="aboutus-modal-content">
            <button className="aboutus-modal-close" onClick={closeModal}>×</button>
            <div className="aboutus-modal-header">
              <div className="aboutus-modal-image">
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>
              <div className="aboutus-modal-info">
                <h2 className="aboutus-modal-name">{selectedMember.name}</h2>
                <p className="aboutus-modal-position">{selectedMember.position}</p>
                <p className="aboutus-modal-experience">
                  {t('aboutUs.team.experience')}: {selectedMember.experience}
                </p>
              </div>
            </div>

            <div className="aboutus-modal-body">
              <div className="aboutus-modal-section">
                <h3>{t('aboutUs.team.about')}</h3>
                <p>{selectedMember.bio}</p>
              </div>

              <div className="aboutus-modal-section">
                <h3>{t('aboutUs.team.education')}</h3>
                <p>{selectedMember.education || '-'}</p>
              </div>

              <div className="aboutus-modal-section">
                <h3>{t('aboutUs.team.skills')}</h3>
                <div className="aboutus-modal-skills">
                  {selectedMember.skills.map((skill, index) => (
                    <span key={index} className="aboutus-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
