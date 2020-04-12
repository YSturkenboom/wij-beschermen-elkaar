import React from 'react';
import { Button, Radio, Card, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { FilterTextField } from './form/FilterTextField';
import { LocationCard } from './form/LocationCard';
import { Search } from '@material-ui/icons';

interface Values {
    address: string;
    distanceInKilometers: number;
}
  
interface Props {
    onSubmit: (values: Values) => void;
}

export const Filter: React.FC<Props> = ({ onSubmit }) => {
    // const [state] = useState({
    //     searchTypeActive: "simple",
    //     query: "",
    // });
    const searchTypeActive = 'simple';

    return (
        <Card raised className="map-search-box">
            <div className="map-search-box-header">
                <h1 className="map-search-box-heading">Store Locator</h1>
                <p>Information on this page is subject to change without prior notice. Please contact the installer directly for up to date information.</p>
            </div>
            
            <div>
                <div className="map-search-box-form-searchtype">
                    <Button className={"map-search-box-form-distance-btn" + (searchTypeActive === 'simple' ? " btn-active" : null)}>Search</Button>
                    <Button className="map-search-box-form-distance-btn">Advanced Search</Button>
                </div>

                <Formik 
                    initialValues={{
                        address: "",
                        distanceInKilometers: 10,
                    }}
                    onSubmit={onSubmit}
                >
                    {({ values }) => (
                        <Form className="map-search-box-form">
                                <div className="map-search-box-form-search">
                                    <Field
                                        name="address"
                                        placeholder="Address or post code..."
                                        component={FilterTextField}
                                        className="map-search-box-form-search"
                                    />
                                    <Button type="submit">
                                        <Search> </Search>
                                    </Button>
                                </div>

                                <RadioGroup row aria-label="position" name="position" defaultValue="top" className="map-search-box-form-distance">
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary" />}
                                        label="1 mile"
                                        labelPlacement="top"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio color="primary" />}
                                        label="2 miles"
                                        labelPlacement="top"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio color="primary" />}
                                        label="5 miles"
                                        labelPlacement="top"
                                    />
                                    <FormControlLabel
                                        value="10"
                                        control={<Radio color="primary" />}
                                        label="10 miles"
                                        labelPlacement="top"
                                    />
                                </RadioGroup>
                        </Form>
                    )}
                    
                </Formik>
            </div>

            <div className="map-search-box-footer">
                <LocationCard name='Samsung @ THREE London, 1.5 miles' address='423 Oxford St LONDON, London, W1C 2PH' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
                <LocationCard name='Test' address='Address' telephone={'+31 334343'} />
            </div>
        </Card>
    );
}

            /* <p>Text</p>
            <div>
                <button onClick={}>Search</button>
                <button>Advanced search</button>
            </div>
            <input onChange={(e) => setQuery(e.target.value)} value={query} placeholder={'Postcode or address...'} /> */