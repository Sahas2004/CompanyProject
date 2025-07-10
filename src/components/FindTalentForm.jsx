import React from 'react';

function FindTalentForm() {
  return (
    <form>
      <input type="text" placeholder="Name" required />
      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" />
      </div>
      <input type="file" />
      <textarea rows="5" placeholder="Additional Information"></textarea>
      <button type="submit" style={{background:"gray"}}>Submit</button>
    </form>
  );
}

export default FindTalentForm;
