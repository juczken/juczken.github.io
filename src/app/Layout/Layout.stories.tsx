import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';
import ThemeProvider from '../../shared/providers/ThemeProvider/ThemeProvider';
import React from 'react';
import { LanguageProvider } from '../../shared/providers/LanguageProvider/LanguageProvider';

const meta: Meta<typeof Layout> = {
  title: 'Shared/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // children: { control: 'text' },
  },
  decorators: [
    (story) => (
      <ThemeProvider>
        <LanguageProvider>{story()}</LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VisibleLayout: Story = {
  args: {
    // children:
    //   'Lorem ipsum dolor sit amet consectetur adipiscing elit orci mattis, platea curabitur litora id sociis tellus a euismod venenatis, fusce volutpat consequat nec lobortis neque ullamcorper et. Aptent tincidunt quisque nulla dignissim netus felis vitae fermentum blandit, elementum eleifend ultrices porttitor congue imperdiet per himenaeos, aliquam curabitur class praesent odio ridiculus cursus volutpat. Penatibus scelerisque diam quis primis non ac etiam dictumst proin, cursus blandit imperdiet erat natoque dapibus conubia justo mus nullam, sagittis quam fermentum litora condimentum curae bibendum velit. Elementum eros at nascetur turpis urna laoreet primis parturient aptent, placerat tincidunt condimentum ac sagittis conubia hac sodales mauris, praesent cursus nec lectus nam odio litora varius. Nam diam vulputate velit semper justo faucibus magnis mattis facilisis viverra aptent, quis blandit a augue curae ultrices nulla aliquet purus pellentesque dui, fermentum placerat tristique taciti proin turpis cras tortor volutpat imperdiet. Mattis senectus magnis netus habitant sagittis per commodo feugiat habitasse parturient posuere, himenaeos class tellus lectus condimentum montes placerat venenatis magna nisi. Massa natoque donec quam orci lectus duis, imperdiet hendrerit cursus tellus enim tincidunt at, mauris ullamcorper sollicitudin pharetra accumsan. Class curae natoque tortor vel blandit faucibus odio metus aenean eleifend hendrerit, augue facilisi elementum etiam vestibulum taciti aliquet dignissim placerat proin, purus penatibus urna potenti pellentesque venenatis et mauris tristique interdum. At eros viverra ullamcorper tempor mattis sociosqu orci tristique ante, vivamus nisl euismod fringilla penatibus lacinia venenatis. Sociosqu rhoncus est ante accumsan pharetra molestie convallis justo hendrerit, nostra lobortis torquent malesuada ac praesent viverra lacus natoque, suscipit quam hac penatibus fermentum aptent massa vehicula. Sem magna convallis rutrum eu montes fusce lacinia risus justo aenean, tellus venenatis suspendisse phasellus commodo vitae dui quis dictumst aptent conubia, vehicula odio ac nascetur consequat hendrerit auctor pellentesque potenti. Nec porta hac eros per eget ultrices dapibus, dui sem egestas aenean senectus metus fringilla, in maecenas hendrerit sagittis non cum. Nulla curabitur massa interdum eleifend dis sem sociis, congue donec fringilla hendrerit sollicitudin molestie magna elementum, est morbi varius sapien ante ullamcorper. Interdum est tristique non praesent vehicula parturient facilisis sagittis, libero faucibus rutrum pharetra suscipit himenaeos pretium, magnis arcu nibh varius pulvinar mollis egestas. Quisque vulputate est arcu posuere penatibus nullam a, lectus tortor ultrices praesent malesuada. Tempor non placerat pulvinar velit leo netus magnis posuere, quis nullam felis nisl fermentum gravida suscipit, etiam at purus porttitor ut ullamcorper neque. Leo lacus est auctor hendrerit dis cras taciti habitant, senectus dapibus ut risus tempus ad integer sapien, euismod viverra facilisis maecenas etiam aenean cursus. Elementum sagittis hac congue ut nostra dapibus conubia, ullamcorper at mi a ad. Lacinia et luctus aliquet ligula metus sed porta volutpat conubia nascetur, commodo fusce non suscipit erat blandit convallis lobortis praesent, neque donec gravida duis elementum taciti facilisi habitasse augue. Quisque dapibus ut hendrerit porttitor faucibus vestibulum semper tempor et magna nisl, nascetur dictumst condimentum fermentum suspendisse mi penatibus dui nostra lacus, urna pharetra auctor potenti lacinia in conubia dignissim libero senectus. Suspendisse erat torquent malesuada quis cubilia cursus faucibus, hac imperdiet nascetur himenaeos metus vestibulum posuere, varius inceptos parturient semper praesent eu. Praesent accumsan dignissim cum erat eleifend nulla posuere, fames himenaeos pulvinar semper pharetra aenean rutrum fusce, iaculis magna ornare neque nisl montes. At parturient morbi luctus imperdiet ut gravida erat fames duis, conubia magna quis pretium condimentum dui cubilia risus. Vulputate aliquet nam habitasse condimentum potenti vitae platea, bibendum metus facilisi nisl mauris egestas facilisis, blandit torquent pellentesque sagittis mus congue. Himenaeos nisi ullamcorper convallis rutrum vestibulum velit sodales cras conubia suspendisse, dictumst semper varius nunc nostra nulla aliquam per cum risus odio, pulvinar fermentum laoreet habitasse mus elementum blandit neque ultricies. Turpis nisl tincidunt ante condimentum montes integer gravida purus augue, porta ac ultrices commodo a libero molestie neque lobortis bibendum, etiam inceptos suspendisse volutpat litora imperdiet tristique pellentesque. Ac dis vel rhoncus nunc purus ultricies feugiat, penatibus ultrices est euismod nam cum sociosqu interdum, pretium ut enim elementum fames hac. Nam habitant risus ullamcorper suspendisse eu quisque dis sodales ultricies, per varius himenaeos justo ad nunc at torquent, cras turpis pharetra pulvinar euismod felis hendrerit feugiat. Aliquam nunc habitasse id eleifend torquent purus, consequat dictum bibendum ridiculus enim, cursus lacus interdum nam vulputate. Cras himenaeos risus tristique feugiat mi vel venenatis, sociis posuere nec vitae varius faucibus pellentesque lobortis, viverra leo vivamus purus at netus. Sociosqu aenean suscipit parturient mattis suspendisse porttitor, ullamcorper feugiat platea ultrices etiam, lectus natoque aptent tincidunt augue. Curae praesent ligula est a malesuada, tellus posuere aliquet tempus pharetra enim, ultrices euismod libero penatibus. At sed molestie luctus mollis penatibus mauris proin dui, vel ligula suspendisse class gravida sodales nisi a, tempor mi morbi vestibulum aptent litora blandit. Et potenti vestibulum ut sociosqu viverra class justo, est ad tempor curabitur varius nam laoreet, cras integer sapien libero maecenas ridiculus. Rhoncus quis fusce nisi congue consequat dignissim tristique luctus, curabitur id habitant scelerisque natoque volutpat. Eleifend conubia mollis mattis dui massa suscipit turpis magna, fusce primis tempus hendrerit eu viverra facilisis, enim commodo morbi dictum fringilla cum cursus. Blandit morbi scelerisque taciti rutrum in mollis, donec vehicula lacus eget vitae erat, diam phasellus luctus platea varius. Parturient libero varius ullamcorper viverra ante aptent magna inceptos tortor dictumst nunc suscipit, blandit suspendisse montes neque nam felis nisi sociosqu cursus eros mattis. Massa eros egestas id lectus parturient faucibus natoque est venenatis, rutrum justo odio dictumst sodales etiam placerat rhoncus dapibus, facilisi nunc sem varius nam ante nisl lacinia. Habitasse eleifend rutrum per ornare dignissim luctus enim viverra nunc nulla montes ridiculus, sociis ligula turpis posuere sapien tempor sem est facilisis erat. Laoreet massa luctus malesuada enim quisque conubia, lobortis curae porta quis mauris cras netus, purus platea fames at orci. Malesuada tellus sem praesent blandit rutrum feugiat faucibus odio, interdum morbi vivamus parturient duis scelerisque semper inceptos, sagittis quis habitasse tristique nostra fermentum et. Gravida metus integer fusce dis donec leo erat tempor, arcu himenaeos neque conubia pretium ad eget. Porttitor molestie suspendisse diam euismod fusce nec ullamcorper, sodales id senectus integer vestibulum per, vel cum libero tellus inceptos pellentesque. Nisl tortor facilisi varius mollis sociosqu purus cursus lacus, potenti sed magnis convallis curabitur himenaeos est, erat tempus nibh litora turpis nascetur sagittis. Hac pretium id sociis leo tempus et ridiculus pellentesque vehicula, lectus convallis rutrum urna parturient auctor dis per platea, dictumst quam sociosqu sodales bibendum vestibulum est hendrerit. Est iaculis odio pellentesque dapibus montes platea dictumst sagittis blandit, quis ad sed fames aliquam nullam tristique nostra torquent venenatis, nulla sapien diam vulputate tellus egestas neque congue. Non vel primis vehicula luctus aenean potenti lobortis turpis blandit sollicitudin eros fringilla euismod dignissim egestas, id quam ridiculus nullam torquent magna ultrices porttitor placerat a morbi phasellus suspendisse urna. Phasellus eget sem turpis pulvinar aenean habitasse molestie per magnis congue fermentum sociosqu, habitant lobortis conubia cras morbi ante ullamcorper est potenti dignissim arcu. Tristique ac cursus porttitor scelerisque leo morbi praesent purus iaculis mauris, potenti euismod ut non fames conubia habitasse senectus vitae, aliquet nullam taciti malesuada vehicula nam aliquam vestibulum commodo. Conubia malesuada est fermentum ultricies hac posuere, rutrum vestibulum nascetur dapibus turpis aptent, aliquam habitasse dignissim quisque felis.',
  },
};