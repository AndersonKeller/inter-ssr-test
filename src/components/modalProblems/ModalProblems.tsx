import { LinkComponent } from "../link/Link";
import "./styles.css";
export function ModalProblems() {
  return (
    <div className="footer-link">
      <LinkComponent>
        <span>Não conseguiu acessar?</span>
      </LinkComponent>
    </div>
  );
}
//@click="modalProblemas()"
// modalProblemas(){
//     this.$root.modal.titulo = `<div style="font-family: fontSecundaria !important;font-size: 40px;padding: 25px 0px;color: var(--dl-color-primary);line-height: 2.8rem;text-align: center;" class="d-flex justify-center">Não consegue acessar o <br>Mundo Colorado?</div>`;
//     this.$root.modal.descricao = `
//         <div class="text-center" style="font-size: 16px !important; color:  var(--dl-color-red-dark); padding: 12px;">
//             <p style="font-size: 16px">Se você é Sócio(a), <a href="https://internacional.zendesk.com/hc/pt-br/requests/new" target="_blank" style="color:  var(--dl-color-primary);font-size: 14px;font-weight: bold;text-decoration: underline;">clique aqui</a> e entre em contato com a Central de Atendimento ao Sócio.</p>
//             <p style="font-size: 16px">Se você ainda não é Sócio(a), envie um e-mail para <a href="mailto:sac@imply.com" style="color: var(--dl-color-primary);font-size: 14px;font-weight: bold;text-decoration: underline;">sac@imply.com</a> que nossa equipe irá auxiliar a acessar o Mundo Colorado!</p>
//         </div>
//     `;
//     this.$root.modal.botao = '';
//     this.$root.modal.show = true;
// }
