import React from 'react';
import {
  Footer,
  SectionWraperContent,
  SectionInfo,
  ParagraphInfo,
  TitleInfo,
} from './styles';

const FooterProperty = () => (
  <Footer>
    <SectionWraperContent>
      <section>
        <TitleInfo>Titulo 1</TitleInfo>
        <ParagraphInfo>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          nam enim atque, reiciendis praesentium magni et voluptatem ab
          doloribus eius fugiat quos, nulla error. Cum ipsam assumenda maiores
          quo exercitationem!
        </ParagraphInfo>
      </section>
      <section>
        <TitleInfo>Titulo 2</TitleInfo>
        <ParagraphInfo>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          nam enim atque, reiciendis praesentium magni et voluptatem ab
          doloribus eius fugiat quos, nulla error. Cum ipsam assumenda maiores
          quo exercitationem!
        </ParagraphInfo>
      </section>
      <section>
        <TitleInfo>Titulo 3</TitleInfo>
        <ParagraphInfo>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          nam enim atque, reiciendis praesentium magni et voluptatem ab
          doloribus eius fugiat quos, nulla error. Cum ipsam assumenda maiores
          quo exercitationem!
        </ParagraphInfo>
      </section>
    </SectionWraperContent>
    <SectionInfo>
      <h2>Todos os diretios reservados</h2>
      <p>&copy;Caio Alvhes Hesse Brone</p>
    </SectionInfo>
  </Footer>
);

export default FooterProperty;
