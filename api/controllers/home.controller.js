import mongoose from 'mongoose';
import { Home } from '../models/home.model.js';


const getDashboard = async (req, res) => {
    const dashboardData = await Home.find({}).sort({ createdAt: -1 })
    res.status(200).json(dashboardData);
}

const updateDashboardData = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Data" })
    }

    const updatedDashboard = await Home.findOneAndUpdate({ _id: id }, {
        ...req.body,
    })

    if (!updatedDashboard) {
        return res.status(404).json({ error: "No Such Data." })
    }

    res.status(200).json(updatedDashboard);

}

    export {
        getDashboard,
        updateDashboardData
    };