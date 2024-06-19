import React from "react";
import Heading from "@/components/design-system/Headings";
import Paragraph from "@/components/design-system/Paragraph";
import FlowersDecoration from "@/components/design-system/FlowersDecoration";
import ParagraphWithSubtitle from "../atoms/ParagraphWithSubtitle";

const CarteMenu: React.FC = () => {
  return (
    <div className="relative container mx-auto text-center max-w-3xl p-8 md:p-12 rounded-lg shadow-lg my-10">
      <FlowersDecoration variant="topLeft" />
      <Heading level={2} className="text-4xl font-script mb-8">
        Menu
      </Heading>
      <div className="space-y-12">
        <section className="space-y-6">
          <Heading level={3} className="text-2xl mb-4">
            Entrées froides
          </Heading>
          <ParagraphWithSubtitle
            title="Salade de penne à l'italienne"
            subtitle="penne, jambon cru, tomates confites et cerises, poivrons verts et
            courgettes"
          />
          <ParagraphWithSubtitle title="Rosace de melon et pastèque" />
          <ParagraphWithSubtitle title="Plateau de charcuterie" />
          <ParagraphWithSubtitle title="Avocado toast" />
        </section>
        <section className="space-y-6">
          <Heading level={3}>Plat Principal</Heading>

          <ParagraphWithSubtitle
            title="Pavé de saumon"
            subtitle="sauce vierge, poêlée de légumes"
          />

          <ParagraphWithSubtitle
            title="Parmentier de canard"
            subtitle="et salade verte"
          />
        </section>
        <section className="space-y-6">
          <Heading level={3}>Dessert</Heading>
          <ParagraphWithSubtitle
            title="Plateau de fromages émincés"
            subtitle="brie, comté, Saint-Nectaire, chèvres de la ferme de Maras"
          />
          <ParagraphWithSubtitle title="Pièce montée" />
          <ParagraphWithSubtitle title="Café" />
        </section>
      </div>
    </div>
  );
};

export default CarteMenu;
