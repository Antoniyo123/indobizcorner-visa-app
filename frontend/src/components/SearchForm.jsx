import React from 'react';
import '../styles/VisaService.css';

const SearchForm = ({ searchQuery, setSearchQuery, selectedCountry, setSelectedCountry, selectedVisaType, setSelectedVisaType, onSearch, onReset, isSearching, hasSearched }) => {
  // Countries that can apply for Indonesian visas (origin countries)
  const countries = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'australia', label: 'Australia' },
    { value: 'japan', label: 'Japan' },
    { value: 'korea', label: 'South Korea' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'india', label: 'India' },
    { value: 'china', label: 'China' },
    { value: 'canada', label: 'Canada' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'netherlands', label: 'Netherlands' },
    { value: 'italy', label: 'Italy' },
    { value: 'spain', label: 'Spain' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'saudi_arabia', label: 'Saudi Arabia' },
    { value: 'uae', label: 'United Arab Emirates' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'other', label: 'Other Countries' }
  ];

  // Visa purposes for visiting Indonesia
  const visaPurposes = [
    { value: 'tourist', label: 'Tourism & Recreation' },
    { value: 'business', label: 'Business Activities' },
    { value: 'family', label: 'Family Visit' },
    { value: 'medical', label: 'Medical Treatment' },
    { value: 'transit', label: 'Transit' },
    { value: 'student', label: 'Education & Training' },
    { value: 'work', label: 'Work & Employment' }
  ];

  const getVisaTypes = (purpose) => {
    const visaTypesByPurpose = {
      tourist: [
        { value: 'tourist', label: 'B1 Tourist (Visa on Arrival)' },
        { value: 'tourist-visit', label: 'B211A Visit Visa (Tourist)' },
        { value: 'tourist-multiple', label: 'Multiple Entry Tourist Visa' }
      ],
      business: [
        { value: 'business', label: 'B1 Business (Visa on Arrival)' },
        { value: 'business-visit', label: 'B211B Visit Visa (Business)' },
        { value: 'business-multiple', label: 'Multiple Entry Business Visa' }
      ],
      family: [
        { value: 'family', label: 'Family Visit Visa' },
        { value: 'family-multiple', label: 'Multiple Entry Family Visa' }
      ],
      medical: [
        { value: 'medical', label: 'Medical Treatment Visa' },
        { value: 'medical-long', label: 'Long-term Medical Visa' }
      ],
      transit: [
        { value: 'transit', label: 'Transit Visa' },
        { value: 'transit-short', label: 'Short Transit Visa' }
      ],
      student: [
        { value: 'student', label: 'B211C Student Visa' },
        { value: 'student-exchange', label: 'Student Exchange Visa' }
      ],
      work: [
        { value: 'work', label: 'Work Permit Visa' },
        { value: 'work-skilled', label: 'Skilled Worker Visa' }
      ]
    };
    return visaTypesByPurpose[purpose] || [];
  };

  const [selectedPurpose, setSelectedPurpose] = React.useState('');
  const [availableVisaTypes, setAvailableVisaTypes] = React.useState([]);

  const handlePurposeChange = (e) => {
    const purpose = e.target.value;
    setSelectedPurpose(purpose);
    setAvailableVisaTypes(getVisaTypes(purpose));
    setSelectedVisaType(''); // Reset visa type when purpose changes
  };

  // Reset purpose when onReset is called
  React.useEffect(() => {
    if (!hasSearched && !selectedCountry && !selectedVisaType) {
      setSelectedPurpose('');
      setAvailableVisaTypes([]);
    }
  }, [hasSearched, selectedCountry, selectedVisaType]);

  return (
    <div className="search-form-container">
      <div className="search-form">
        <div className="form-row">
          {/* <div className="form-group">
            <label htmlFor="searchQuery">🔍 General Search</label>
            <input
              type="text"
              id="searchQuery"
              className="form-control"
              placeholder="Search visa type, activities, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div> */}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">🌍 Country of Origin</label>
            <select 
              id="country" 
              className="form-control"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="visaPurpose">🎯 Purpose of Visit</label>
            <select 
              id="visaPurpose" 
              className="form-control"
              value={selectedPurpose}
              onChange={handlePurposeChange}
            >
              <option value="">All Purposes</option>
              {visaPurposes.map(purpose => (
                <option key={purpose.value} value={purpose.value}>
                  {purpose.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="visaType">📋 Visa Type</label>
            <select 
              id="visaType" 
              className="form-control"
              value={selectedVisaType}
              onChange={(e) => setSelectedVisaType(e.target.value)}
              disabled={!selectedPurpose}
            >
              <option value="">
                {selectedPurpose ? 'All Visa Types' : 'Select purpose first'}
              </option>
              {availableVisaTypes.map(visa => (
                <option key={visa.value} value={visa.value}>
                  {visa.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="button-group">
          <button 
            type="button" 
            className={`search-btn ${isSearching ? 'loading' : ''}`}
            disabled={isSearching}
            onClick={onSearch}
          >
            {isSearching ? '⏳ Searching...' : '🔍 Find Indonesia Visa'}
          </button>
          
          {hasSearched && (
            <button 
              type="button" 
              className="reset-btn"
              onClick={onReset}
            >
              🔄 Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;