import { renderActiveComponent } from '../../../libraries/LandlordProfileRender';
import './information.scss';

function Information({ toggle, activeComponent }) {
    return (
        <div className='information' >
            {renderActiveComponent(activeComponent)}
        </div>
    );
}

export default Information;
