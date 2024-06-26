import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="h-screen my-10 mx-10">
      <h1 className="text-3xl font-semibold">이용약관</h1>
      <section className="mt-10">
        <h2 className="text-lg font-semibold mt-10 mb-1">
          StomaWeb에 오신 것을 환영합니다.
        </h2>
        <p className="text-gray-800">
          StomaWeb을 이용하시게 되면 여러분은 본 약관 및 관련 운영 정책을
          확인하거나 동의하게 됩니다.
        </p>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          StomaWeb 이용과 관련하여 몇 가지 주의사항이 있습니다.
        </h2>
        <ul className="text-gray-800">
          <li className="mb-1">
            StomaWeb의 사전 허락 없이 자동화된 수단(예: 매크로 프로그램,
            로봇(봇), 스파이더, 스크래퍼 등)을 이용해서 데이터를 수집하며 과도한
            트래픽을 일으키는 행위는 금지됩니다.
          </li>
          <li>
            StomaWeb에 포함된 소프트웨어를 역 설계, 소스코드 추출 시도, 복제,
            분해, 모방, 기타 변형하는 등의 행위는 금지됩니다.
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          StomaWeb에는 광고가 포함되어 있습니다.
        </h2>
        <p className="text-gray-800 mb-1">
          StomaWeb에는 여러 광고가 게재되어 있습니다. StomaWeb을 이용하면서
          발생할 수 있는 데이터 통신요금은 가입하신 통신사업자와의 이용계약에
          따라 여러분이 부담하며, 게재되어 있는 광고 열람으로 인해 추가적으로
          발생하는 비용 역시 여러분이 부담합니다.
        </p>
        <p className="text-gray-800">
          StomaWeb을 이용하기 위해 원하지 않는 광고를 봐야 하는 경우가 있습니다.
          이는 여러분에게 제공하는 다양한 금융 자산 정보를 원칙적으로 무료로
          제공할 수 있게 해주는 데 기여하며, 더 나은 서비스를 제공할 수 있는
          기반이 됩니다.{" "}
        </p>
        <h2 className="text-lg font-semibold mt-10 mb-1">
          여러분의 소중한 의견을 귀 기울여 듣겠습니다.
        </h2>
        <p className="text-gray-800">
          StomaWeb과 관련하여 궁금하신 사항이 있으시면{" "}
          <Link href="/more/support">
            <span className="text-gray-400 hover:text-gray-800">문의하기</span>
          </Link>
          로 이동하여 문의 주시기 바랍니다.
        </p>
      </section>
    </main>
  );
}
