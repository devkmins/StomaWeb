export default function AboutUs() {
  return (
    <main className="h-screen my-10 mx-10">
      <h1 className="text-3xl font-semibold">이 웹사이트에 대하여</h1>
      <section className="mt-10">
        <ol className="text-gray-800">
          <li className="mb-1">
            StomaWeb은 다우존스, 나스닥, S&P 500을 비롯한 주식과 비트코인,
            이더리움 등의 암호화폐와 같은 금융 자산 관련 정보를 제공하는
            서비스입니다.
          </li>
          <li className="mb-1">
            StomaWeb 팀은 대한민국에 위치하고 있으며, 한국어와 영어 등의 언어를
            제공합니다.
          </li>
          <li>
            여러분의 문의사항에 대해 최선을 다해 답변드릴 준비가 되어 있으며,
            개선해야 할 부분에 대한 의견을 제공해 주신다면 이를 반영하여
            StomaWeb을 개선할 것을 약속합니다!
          </li>
        </ol>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          서비스명의 의미는 무엇인가요?
        </h2>
        <p className="text-gray-800">
          <strong>
            StomaWeb이라는 서비스명은 Stock과 Market이 결합되어 형성된 서비스명
          </strong>
          이며, 금융 자산 관련 정보를 제공하는 웹사이트라는 의미를 담고
          있습니다.
        </p>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          이 웹사이트는 어떤 서비스를 제공하나요?
        </h2>
        <ol className="text-gray-800">
          <li className="mb-1">
            1. 뉴스, 주식, 암호화폐, 지수, 외환, 선물, 펀드 및 ETF에 대한 다양한
            정보(예: 실시간 가격, 개요, 재무 정보 등)를 제공하며, 그래프를 통해
            직관적으로 확인할 수 있습니다.
          </li>
          <li className="mb-1">
            2. 투자, 경제와 관련된 각종 강의, 도서, 서비스, 각 나라 은행들의
            보고서와 같은 유용한 정보를 제공합니다.
          </li>
          <li className="mb-1">
            3. 로그인, 회원가입을 할 필요가 없습니다! 로그인을 하지 않고 원하는
            대로 관심 종목을 추가할 수 있습니다!
          </li>
          <li>4. 다양한 서비스들을 추가적으로 제공할 예정입니다.</li>
        </ol>
      </section>
    </main>
  );
}
