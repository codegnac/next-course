export default () => (
  <>
    <style jsx>{`
      @keyframes slideIn {
        0% {
          transform: translateY(-100%);
        }

        100% {
          transform: translateY(0);
        }
      }
      header {
        width: 100%;
        height: 80px;
        padding: 12px 24px;
        background-color: #deb481;
        animation: 1s ease-out 0s 1 slideIn;
      }
      h1 {
        margin: 0;
        color: #2f3260;
      }
    `}</style>
    <header>
      <h1>Next.js Course by Codegnac</h1>
    </header>
  </>
);
