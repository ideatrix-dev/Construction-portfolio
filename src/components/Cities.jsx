export const districts = [
  'Bagalkote',
  'Ballari',
  'Belagavi',
  'Bengaluru Rural',
  'Bengaluru Urban',
  'Bidar',
  'Chamarajanagar',
  'Chikkaballapura',
  'Chikkamagaluru',
  'Chitradurga',
  'Dakshina Kannada',
  'Davanagere',
  'Dharwad',
  'Gadag',
  'Hassan',
  'Haveri',
  'Kalaburagi',
  'Kodagu',
  'Kolar',
  'Koppal',
  'Mandya',
  'Mysuru',
  'Raichur',
  'Ramanagara',
  'Shivamogga',
  'Tumakuru',
  'Udupi',
  'Uttara Kannada',
  'Vijayanagara',
  'Vijayapura',
  'Yadgir',
]

export default function Cities() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Building in your city</h2>
        <p className="sub">Serving all 31 districts of Karnataka.</p>
        <div className="cities">
          {districts.map((district) => (
            <span key={district}>{district}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
