import React from 'react'
import './Landing.css'

import FeatureCard from '../../components/FeatureCard/FeatureCard'
import StorageIcon from '@mui/icons-material/Storage';
import Layout from '../../components/Layout/Layout';


const Landing = () => {
    const features = [
        { icon: <StorageIcon />, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque non lacus dapibus tincidunt quis eu ante. Maecenas viverra augue justo. Vestibulum elementum convallis est. Interdum et malesuada fames ac ante.' },
        { icon: <StorageIcon />, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque non lacus dapibus tincidunt quis eu ante. Maecenas viverra augue justo. Vestibulum elementum convallis est. Interdum et malesuada fames ac ante.' },
        { icon: <StorageIcon />, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque non lacus dapibus tincidunt quis eu ante. Maecenas viverra augue justo. Vestibulum elementum convallis est. Interdum et malesuada fames ac ante.' },
        { icon: <StorageIcon />, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque non lacus dapibus tincidunt quis eu ante. Maecenas viverra augue justo. Vestibulum elementum convallis est. Interdum et malesuada fames ac ante.' },
        { icon: <StorageIcon />, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque non lacus dapibus tincidunt quis eu ante. Maecenas viverra augue justo. Vestibulum elementum convallis est. Interdum et malesuada fames ac ante.' },
        { icon: <StorageIcon />, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque non lacus dapibus tincidunt quis eu ante. Maecenas viverra augue justo. Vestibulum elementum convallis est. Interdum et malesuada fames ac ante.' },
    ]
    return (
        <div className='Landing'>
            <Layout>
                <div id='landing'>
                    <div className='line'>
                        <h1>Sample Heading for Landing</h1>
                    </div>
                    <h3>This is a sample text with information that will be input later</h3>
                    <button className='landing-btn'>GET STARTED</button>
                </div>
                <div id='features'>
                    {features.map((feature) => <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />)}
                </div>
            </Layout >
        </div>

    )
}

export default Landing