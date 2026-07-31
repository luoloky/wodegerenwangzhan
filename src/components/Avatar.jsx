import './Avatar.css'

/**
 * Personal portrait — real headshot photo.
 */
export default function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__inner">
        <img
          className="avatar__photo"
          src="/images/portrait.jpg"
          alt="罗立基 LUO LIJI"
          loading="lazy"
        />

        <div className="avatar__overlay">
          <span className="avatar__tag mono">LUO LIJI</span>
          <span className="avatar__tag mono">VISUAL DESIGNER</span>
        </div>
      </div>

      <div className="avatar__frame">
        <span className="avatar__frame-corner avatar__frame-corner--tl" />
        <span className="avatar__frame-corner avatar__frame-corner--tr" />
        <span className="avatar__frame-corner avatar__frame-corner--bl" />
        <span className="avatar__frame-corner avatar__frame-corner--br" />
      </div>
    </div>
  )
}
