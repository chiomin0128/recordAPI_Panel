
export default function Basics() {
    return (
      <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
            <h2 className="text-xl font-bold">Round Table Discussion</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span className="text-sm">July 20, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm">3:00 PM - 4:30 PM</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="bg-muted rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground font-bold">
                JS
              </div>
              <div>
                <h3 className="font-medium">John Smith</h3>
                <p className="text-muted-foreground text-sm">Software Engineer</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center text-secondary-foreground font-bold">
                AM
              </div>
              <div>
                <h3 className="font-medium">Alice Martinez</h3>
                <p className="text-muted-foreground text-sm">Artist</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-accent-foreground font-bold">
                SC
              </div>
              <div>
                <h3 className="font-medium">Sarah Chen</h3>
                <p className="text-muted-foreground text-sm">Community Organizer</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center space-x-4">
              <div className="bg-success rounded-full w-12 h-12 flex items-center justify-center text-success-foreground font-bold">
                JD
              </div>
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-muted-foreground text-sm">Small Business Owner</p>
              </div>
            </div>
          </div>
          <div className="bg-muted py-4 px-6">
            <h3 className="text-lg font-medium">Topic: The Future of Sustainable Technology</h3>
          </div>
        </div>
      </div>
    )
  }
  
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function ClockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }